import React, { useState } from 'react';
import './rendezVousVeto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import DateFilter from '../dateFilter/dateFilter';
import Tooltip from '@mui/material/Tooltip';
import Popup from '../popup/Popup';

const RendezVousVetoPage = () => {

  const [showPopup, setShowPopup] = useState(false);
  const title = 'Annulation rendez-vous';
  const messagePopup = "Êtes vous sûr de vouloir annuler le rendez-vous ?";

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDelete = () => {
    setShowPopup(true)
  }
  //const showPresentationVeto = 

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

            <div className='row width mb-2'>
              <div className='col-4 center h5'>Prénom</div>
              <div className='col-4 center h5'>Date</div>
              <div className='col-3 center h5'>Animal</div>
            </div>
            <div className='row test1 form-control form-control-lg mb-2 col-12'>
              <div className='col-4 center'><em>test</em></div>
              <div className='col-4 center'><em>test</em></div>
              <div className='col-3 center'><em>test</em></div>
              <Tooltip title="Annuler">
                <div onClick={handleDelete} className='col-1 icon center' >
                  <FontAwesomeIcon icon={faXmark} />

                </div>
              </Tooltip>

            </div>
            <div className='row test1 form-control form-control-lg mb-2'>
              <div className='col-4 center'><em>test</em></div>
              <div className='col-4 center'><em>test</em></div>
              <div className='col-3 center'><em>test</em></div>
              <Tooltip title="Annuler">
                <div className='col-1 icon center' >
                  <FontAwesomeIcon icon={faXmark} />

                </div>
              </Tooltip>
            </div>
            <div className='row test1 form-control form-control-lg'>
              <div className='col-4 center'><em>test</em></div>
              <div className='col-4 center'><em>test</em></div>
              <div className='col-3 center'><em>test</em></div>
              <Tooltip title="Annuler">
                <div className='col-1 icon center' >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RendezVousVetoPage;