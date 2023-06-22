import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Cabinet from '../components/search/Cabinet'
import Creneaux from '../components/creneaux/Creneaux'
import '../assets/css/pages/CabinetSearch.css'



const CabinetFoundPage = () => {

    const [cabinets, setCabinets] = useState([]);
    const location = useLocation();
    const [showCreneau, setShowCreneau] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    console.log(cabinets)

    useEffect(() => {
      setCabinets(JSON.parse(location.state.cabinets));
    }, [])
    
    const handleClickRdv = (id) => {
      setSelectedId(id);
      setShowCreneau(!showCreneau);
    }

    const handlePopupClose = () => {
      setShowCreneau(false);
      setSelectedId(null);
    }

    return (
        <>
            <h2>Les cabinets proches de votre région</h2>
            {cabinets.map((cabinet) => (
              <Cabinet cabinet={cabinet} click={handleClickRdv} key={cabinet.cabinet_id}/>
            ))}
            {showCreneau && (
            <div className="popup-container">
               <Creneaux id={selectedId} onClose={handlePopupClose}/>
            </div>
          )}
        </>
    )
    ;
  };
  
  export default CabinetFoundPage;