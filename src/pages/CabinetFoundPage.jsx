import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Cabinet from '../components/search/Cabinet'
import Creneaux from '../components/creneaux/Creneaux'
import '../assets/css/pages/CabinetSearch.css'
import PopupValidation from '../components/creneaux/PopupValidation';
import axios from 'axios';



const CabinetFoundPage = () => {

    const [cabinets, setCabinets] = useState([]);
    const [idCreneau, setIdCreneau] = useState(null);
    const location = useLocation();
    const [showCreneau, setShowCreneau] = useState(false);
    const [showValidation, setShowValidation] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedDate, setSelectedDate] =useState(null)
    const navigate = useNavigate();

    console.log(cabinets)

    useEffect(() => {
      setCabinets(JSON.parse(location.state.cabinets));
    }, [])
    
    const handleClickRdv = (id) => {
      setSelectedId(id);
      setShowCreneau(!showCreneau);
    }

    const handlePopupClose = () => {
      setShowCreneau(!showCreneau);
      setSelectedId(null);
    }

    const handleValidationClose = () => {
      setIdCreneau(null);
      setShowValidation(!showValidation);
    }

    const handleClickCreneau = (event) => {
      console.log(event)
      setSelectedDate(event.start);
      setIdCreneau(event.id);
      setShowValidation(!showValidation);
    }

    console.log(selectedDate)

    const handleValidationClick = () => {
      const email = localStorage.getItem('email');
      let userId = null
      const params = new URLSearchParams();
      params.append('email', email);
      
      const url = `http://localhost:8000/user//users/email/?${params.toString()}`;

      axios.get(url)
      .then((response) => {
        userId = response.data.data.idUser
        console.log(response.data)
      })
      .catch(error => {
        console.error("err",error);
      });

      let body = {
        animal: 1,
        cabinet: selectedId,
        date: selectedDate
      }

      axios.post(`http://localhost:8000/rdv/rdv/1`, body,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        navigate('/confirmation', {
          state: { rdv: JSON.stringify(response.data.data[0]) },
        });
      })
      .catch(error => {
        console.error("err",error);
      });
    }

    return (
        <>
            <h2>Les cabinets proches de votre région</h2>
            {cabinets.map((cabinet) => (
              <Cabinet cabinet={cabinet} click={handleClickRdv} key={cabinet.cabinet_id}/>
            ))}
            {showCreneau && (
            <div className="popup-container">
               <Creneaux id={selectedId} onClose={handlePopupClose} validation={handleClickCreneau}/>
            </div>
          )}

          {showValidation && (
            <div className="popup-container-validation">
               <PopupValidation id={selectedId} onClose={handleValidationClose} handleValidation={handleValidationClick}/>
            </div>
          )}
        </>
    )
    ;
  };
  
  export default CabinetFoundPage;