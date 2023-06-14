import React, { useState } from 'react';

import logo from '../../assets/images/logovet.png'
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newUserBody = {
      email : email,
      password : password,
      nom : lastName,
      prenom : firstName,
      adresse : address,
      isVeto : 0
    }
    if(firstName && lastName && email && password && address){
      axios.post('http://localhost:8000/user/users', newUserBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <div className="signup-page">
      <img id="logo" src={logo}/>
      <h1>Inscription - étape {step}</h1>
      {step === 1 && (
        <form onSubmit={handleNextStep}>
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <button type="submit">Suivant</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleNextStep}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="button" id='precedent-btn' onClick={handlePreviousStep}>
            Précédent
          </button>
          <button type="submit">Suivant</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Code postal</label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={handlePostalCodeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <button type="button" id='precedent-btn' onClick={handlePreviousStep}>
            Précédent
          </button>
          <button type="submit">S'inscrire</button>
        </form>
      )}
    <div className="progress-bar">
    <span className={`progress-dot ${step >= 1 ? 'filled' : ''}`} />
    <span className={`progress-dot ${step >= 2 ? 'filled' : ''}`} />
    <span className={`progress-dot ${step >= 3 ? 'filled' : ''}`} />
    </div>
    </div>
  );
};

export default Signup;
