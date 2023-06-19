import React, { useState } from 'react';
import Signup from '../signup/Signup';
import logo from '../../assets/images/logovet.png';
import './Login.css';
import axios from 'axios';

const LoginPage = ({ onHideNavBar }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [authError, setAuthError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = () => {
    setSignUp(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get('http://localhost:8000/user/auth', {
      params: {
        email: email,
        password: password
      }
    })
      .then(response => {
        if (response.data.user) {
          console.log("authentifié");
          setAuthError(false);

          // METTRE EN PLACE SYSTEME DASHBOARD
        }
        else {
          console.log("non authentifié");
          setAuthError(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (

    <div>
      {signUp ?


        <Signup />

        :

        <div className="login-page">
          <img src={logo} id='logo' />
          <h1>Connexion</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder='monemail@gmail.com'
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
            <button type="submit">Se connecter</button>
            <button id="signup" onClick={handleSignup}>Inscription</button>
            <p>{authError ? "Mot de passe erronné" : ""}</p>
          </form>
        </div>
      }

    </div>
  );
};

export default LoginPage;