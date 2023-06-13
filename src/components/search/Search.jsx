import {useState, useEffect } from 'react'
import { Send } from 'react-bootstrap-icons';
import '../../assets/css/components/Search.css';
import '../../assets/css/components/Button.css';
import '../../assets/css/common/Margin.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [city, setCity] = useState(null);
    const [mapCity, setMapCity] = useState([]);

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
        setCity(item);
        setSearchTerm(item.nom);
      };

    return (
       <>
        <form className="search">
            <input type="text" className="mr-5" placeholder="Localisation" value={searchTerm} onInput={handleSearchChange}/>
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