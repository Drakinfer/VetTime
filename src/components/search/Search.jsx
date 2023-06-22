import {useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Send } from 'react-bootstrap-icons';
import axios from 'axios';
import Message from './Message';
import '../../assets/css/components/Search.css';
import '../../assets/css/components/Button.css';
import '../../assets/css/common/Margin.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [mapCity, setMapCity] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetchCities();
      }, []);
    
    const fetchCities = async (name) => {
        try {
          const response = await fetch('https://geo.api.gouv.fr/communes?nom=' + name + '&fields=centre,departement&limit=5');
          const jsonData = await response.json();
          setMapCity(jsonData);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    };

    const handleSearchChange = (event) => {
      const { value } = event.target;
      setSearchTerm(value);
      fetchCities(value);
    };

      const handleItemClick = (item) => {
        setSelectedCity(item);
        setSearchTerm(item.nom);
        setMapCity([]);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
      
        !selectedCity
          ? setMessage('Veuillez sélectionner une ville dans la liste proposée')
          : (() => {
              const params = new URLSearchParams();
              params.append('longitude', selectedCity['centre'].coordinates[0]);
              params.append('latitude', selectedCity['centre'].coordinates[1]);
      
              const url = `http://localhost:8000/cabinet/cabinetRayon?${params.toString()}`;
      
              axios
                .get(url)
                .then((response) => {
                  console.log(response);
                  navigate('/cabinets', {
                    state: { cabinets: JSON.stringify(response.data.data[0]) },
                  });
                })
                .catch((error) => {
                  console.error(error);
                });
            })();
      };
  

    return (
       <>
       {message != '' && <Message message={message}/>}
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" className="mr-5" placeholder="Localisation" value={searchTerm} onChange={handleSearchChange}/>
            <button type="submit" className="send-button"><Send  /></button>
        </form>
        {mapCity.length > 0 ? (
        <table>
          <tbody>
            {mapCity.map((item) => (
              <tr key={item.value}>
                <td onClick={() => handleItemClick(item)}>{item.nom} - {item.departement.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

       </>
    );
  };
  
  export default Search;