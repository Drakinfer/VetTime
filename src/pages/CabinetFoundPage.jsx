import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Cabinet from '../components/search/Cabinet'
import '../assets/css/pages/CabinetSearch.css'



const CabinetFoundPage = () => {

    const [cabinets, setCabinets] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
      setCabinets(JSON.parse(location.state.cabinets));
    }, [])
    
    console.log(cabinets);

    return (
        <>
            <h2>Les cabinets proches de votre région</h2>
            {cabinets.map((cabinet) => (
              <Cabinet cabinet={cabinet}/>
            ))}
        </>
    )
    ;
  };
  
  export default CabinetFoundPage;