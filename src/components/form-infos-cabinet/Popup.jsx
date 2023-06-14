import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h3>Vous êtes un nouveau vétérinaire !</h3>
        <p>Nous vous invitons à renseigner toutes les informations de votre cabinet.</p>
        <p>Cela aidera au référencement de votre cabinet afin que les utilisateurs de VetTime puissent résérver un rendez-vous avez vous.</p>
        <button className="close-popup-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Popup;
