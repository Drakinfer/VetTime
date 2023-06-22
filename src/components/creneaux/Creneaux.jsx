import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';
import '../../assets/css/components/Creneaux.css'

const Creneaux = (props) => {

    const [creneaux, setCreneaux] = useState([]);
    const localizer = momentLocalizer(moment);

    

    useEffect(() => {
        axios.get(`http://localhost:8000/creneau/creneauOK/${props.id}`).then(response => {
            const events = response.data.data.map(obj => {
                let start_date = new Date(obj.date_start)
                console.log(obj)
                return {
                  title: start_date.getUTCMinutes() != 0 ? start_date.getHours() + 'h' + start_date.getUTCMinutes() : start_date.getHours() + 'h',
                  start: start_date,
                  end: new Date(obj.date_end), 
                };
            });
            setCreneaux(events)
        }).catch(error => {
          console.error("err",error);
        });
    }, []);
    
    return (
        <div className="popup-creneaux">
            <span className="close" onClick={props.onClose}>
                &times;
            </span>
            <p class="title">Créneaux disponibles</p>
            {creneaux.length > 0 ? (
            <Calendar
                localizer={localizer}
                events={creneaux}
                startAccessor="start"
                endAccessor="end"
                defaultView="week"
            />
            ) : (
            <p>Aucun créneau disponible.</p>
            )}
        </div>
    )
    ;
  };
  
  export default Creneaux;