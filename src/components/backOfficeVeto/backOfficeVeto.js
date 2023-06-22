import React, { useState, useEffect } from 'react';
import './backOfficeVeto.css';
import axios from 'axios';

const BackOfficeVetoPage = () => {
  const [appointments, setAppointments] = useState([]);

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
        setAppointments(response.data.data);
      })
      .catch(error => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  const closestAppointment = appointments.reduce((closest, appointment) => {
    const currentDate = new Date();
    const appointmentDate = new Date(appointment.date);

    if (!closest || appointmentDate < closest) {
      return appointment;
    }

    return closest;
  }, null);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  //const showPresentationVeto = 

  return (
    <><div className='container mt-3 interfaceVeto'>
      <div className='mb-4 font-size'>Notre équipe de vétérinaires passionnés est dédiée à fournir des soins exceptionnels à vos animaux de compagnie. Avec notre expertise médicale avancée et notre approche compatissante, nous assurons leur bien-être et leur santé. De la médecine préventive à la chirurgie, nous offrons une gamme complète de services vétérinaires. Faites confiance à notre équipe pour prendre soin de vos compagnons fidèles. Visitez notre site web dès maintenant pour en savoir plus.</div>

      <div className='mb-4 form-control form-control-lg success'>
        {closestAppointment ? (
          <div className=''>
            <div>Prochain rendez-vous : </div>
            <div className='ms-4 d-flex'>
              <div className='me-3'>{closestAppointment.nomUser.toUpperCase()}</div>
              <div className='me-3'>{formatDate(closestAppointment.date)}</div>
              <div>{closestAppointment.especeAnimal}</div>
            </div>
          </div>
        ) : (
          <div>Aucun rendez-vous trouvé.</div>
        )}
      </div>

      <div className='mb-2 font-size'>Disponibilité : 9h - 17h</div>
    </div>
    </>
  );
};

export default BackOfficeVetoPage;