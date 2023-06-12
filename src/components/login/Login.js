import React, { useState } from 'react';
import Signup from '../signup/Signup';
import logo from '../../assets/images/logovet.png';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);

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
  };

  return (
    <div>
      {signUp ? 


      <Signup/>

      :       
      
        <div className="login-page">
        <img src={logo} id='logo'/>
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
        </form>
      </div>
    }
    </div>
  );
};

export default LoginPage;