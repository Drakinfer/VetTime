import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, title, message, type, onDelete }) => {
    const renderButtons = () => {
        if (type === 'delete') {
            return (
                <div>
                    <button className="cancel-btn" onClick={onClose}>
                        Annuler
                    </button>
                    <button className="confirm-btn" onClick={handleDelete}>Valider</button>
                </div>
            );
        } else {
            return (
                <button className="close-popup-btn" onClick={onClose}>
                    Fermer
                </button>
            );
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete();
        }
        onClose();
    }

    return (
        <div className={`popup ${isOpen ? 'open' : ''}`}>
            <div className="popup-content">
                <h3>{title}</h3>
                <p>{message}</p>
                {renderButtons()}
            </div>
        </div>
    );
};

export default Popup;