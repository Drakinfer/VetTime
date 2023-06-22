import React, { useState } from 'react';
import Signup from '../signup/Signup';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../Context/AuthContext';

const LoginPage = ({ onHideNavBar }) => {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [isVeto, setIsVeto] = useState(localStorage.getItem('isVeto') || '');
  const { loginUser } = useAuth();
  const { user } = useAuth();
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = () => {
    setSignUp(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser({ email, password })
    try {
      if (loginUser) {
        // navigate('dashboard/veto'); // ENVOYER VERS DASHBOARD VETO
        if (user.isVeto === 1) {
          localStorage.setItem('email', email);
          localStorage.setItem('isVeto', '1');
        } else {
          localStorage.setItem('email', email);
          localStorage.setItem('isVeto', '0');
          // navigate('/dashboard/user'); // ENVOYER VERS DASHBOARD USER
        }
      } else {
        setAuthError(true);
      }
    } catch (error) {
      console.error("err", error);
      setAuthError(true);
    };
  };

  return (

    <div>
      {signUp ?


        <Signup />

        :

        <div className="login-page">
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