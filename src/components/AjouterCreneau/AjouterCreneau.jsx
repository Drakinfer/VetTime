import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import "./AjouterCreneau.css";

const AjouterCreneau = () => {
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const { user } = useAuth();

  console.log(user);

  const handleChangeDateStart = (e) => {
    setDateStart(e.target.value);
  };
  const handleChangeDateEnd = (e) => {
    setDateEnd(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/creneau/creneau/${user.cabinet_id}`,
        {
          dateStart,
          dateEnd,
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="AjoutContainer">
      <h3>
        Pour poster un créneau, veuillez choisir une date de début et une date
        de fin
      </h3>{" "}
      <br />
      <h4>Date de début</h4>
      <input
        type="datetime-local"
        className="AjoutC"
        placeholder="Date Début"
        onChange={handleChangeDateStart}
      ></input>{" "}
      <br />
      <h4>Date de fin</h4>
      <input
        type="datetime-local"
        className="AjoutC"
        onChange={handleChangeDateEnd}
      ></input>{" "}
      <br />
      <button type="submit" className="button" onClick={handleSubmit}>
        Valider
      </button>
    </div>
  );
};

export default AjouterCreneau;
