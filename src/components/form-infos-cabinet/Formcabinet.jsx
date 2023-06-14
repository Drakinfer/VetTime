import React, { useState } from 'react';
import './Formcabinet.css';
import Popup from './Popup';

const FormCabinet = () => {
  const [ville, setVille] = useState('');
  const [cp, setCP] = useState('');
  const [nomCabinet, setNomCabinet] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telCabinet, setTelCabinet] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ville,
      cp,
      nomCabinet,
      adresse,
      telCabinet,
      latitude,
      longitude,
    };
    console.log(formData);
    setVille('');
    setCP('');
    setNomCabinet('');
    setAdresse('');
    setTelCabinet('');
    setLatitude('');
    setLongitude('');
  };


  const fetchAddressSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${searchTerm}`);
      const data = await response.json();
      const suggestions = data.features.map((feature) => feature);
      setAddressSuggestions(suggestions);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des suggestions d\'adresse :', error);
    }

  };

  const onClickSuggestion = (sugg) =>{
    setLatitude(sugg.geometry.coordinates[0]);
    setLongitude(sugg.geometry.coordinates[1]);
    setVille(sugg.properties.city);
    setCP(sugg.properties.postcode);
  }

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="container">
      <Popup isOpen={showPopup} onClose={closePopup} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomCabinet">Nom du cabinet:</label>
          <input
            type="text"
            id="nomCabinet"
            value={nomCabinet}
            onChange={(e) => setNomCabinet(e.target.value)}
          />
        </div>
        <div className="address-input-container">
          <label htmlFor="adresse">Adresse:</label>
          <div className="address-input-wrapper">
            <input
              type="text"
              id="adresse"
              value={adresse}
              onChange={(e) => {
                setAdresse(e.target.value);
                fetchAddressSuggestions(e.target.value);
              }}
            />
            {addressSuggestions.length > 0 && (
              <ul className="address-suggestions">
                {addressSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      onClickSuggestion(suggestion);
                      setAdresse(suggestion.properties.name);
                      setAddressSuggestions([]);
                    }}
                  >
                    {suggestion.properties.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="ville">Ville:</label>
          <input
            type="text"
            id="ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            disabled
          />
        </div>
        <div>
          <label htmlFor="cp">Code postal:</label>
          <input
            type="text"
            id="cp"
            value={cp}
            onChange={(e) => setCP(e.target.value)}
            disabled
          />
          
        </div>
        <div>
          <label htmlFor="telCabinet">Téléphone du cabinet:</label>
          <input
            type="text"
            id="telCabinet"
            value={telCabinet}
            onChange={(e) => setTelCabinet(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Soumettre</button>
        </div>
      </form>
    </div>
  );     
};

export default FormCabinet;
