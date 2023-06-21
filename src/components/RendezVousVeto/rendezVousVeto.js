import React, { useState, useEffect } from 'react';
import './rendezVousVeto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import DateFilter from '../dateFilter/dateFilter';
import Tooltip from '@mui/material/Tooltip';
import Popup from '../popup/Popup';
import axios from 'axios';

const RendezVousVetoPage = () => {
  const [rendezVous, setRendezVous] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const title = 'Annulation rendez-vous';
  const messagePopup = "Êtes vous sûr de vouloir annuler le rendez-vous ?";

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDelete = () => {
    setShowPopup(true)
  }
  //   event.preventDefault();

  //   axios.get('http://localhost:8000/rdv/rdv', {
  //     params: {
  //       idUser: email,
  //       cabinet_id: password,
  //       especeAnimal : tet, 
  //       date: fdesff
  //     }
  //   })
  //     .then(response => {
  //       if (response.data.success) {
  //         const user = response.data.user;
  //         if (user.isVeto === 1) {
  //           localStorage.setItem('email', user.emailUser);
  //           localStorage.setItem('isVeto', '1');
  //           //navigate('/dashboard/veto'); // ENVOYER VERS DASHBOARD VETO
  //         } else {
  //           localStorage.setItem('email', user.emailUser);
  //           localStorage.setItem('isVeto', '0');
  //           //navigate('/dashboard/user'); // ENVOYER VERS DASHBOARD USER
  //         }
  //       } else {
  //         setAuthError(true);
  //       }
  //     })
  //     .catch(error => {
  //       console.error("err", error);
  //       setAuthError(true);
  //     });
  // };
  //const showPresentationVeto = 


  useEffect(() => {
    // Fonction exécutée au chargement de la page
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8000/rdv/rdv')
      .then(response => {
        // Traitement de la réponse
        console.log(response.data.data)
        setRendezVous(response.data.data);
      })
      .catch(error => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Popup isOpen={showPopup} onClose={closePopup} title={title} message={messagePopup} type="delete" onDelete={handleDelete} />
      <div className='container'>
        <div className='mt-2 col-12'>
          <div className='mb-4 homeNav titleRubrique'>
            <span className='h3'>Mes Rendez-Vous</span>
          </div>
          <div className='col-12'>
            <div className='mt-3 mb-3'>
              <DateFilter></DateFilter>
            </div>

            <div className='row width mb-2' >
              <div className='col-4 center h5'>Client</div>
              <div className='col-4 center h5'>Date</div>
              <div className='col-3 center h5'>Animal</div>
            </div>

            {rendezVous.map(rdv => (
              <div key={rdv.idRdv} className='row d-flex form-control form-control-lg mb-2 col-12'>
                <div className='col-4 center'>{rdv.nomUser.toUpperCase()} {rdv.prnmUser}</div>
                <div className='col-4 center'>{formatDate(rdv.date)}</div>
                <div className='col-3 center'>{rdv.especeAnimal}</div>
                <Tooltip title="Annuler">
                  <div onClick={() => handleDelete(rdv.idRdv)} className='col-1 icon center' >
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RendezVousVetoPage;