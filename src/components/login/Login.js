import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
    <div>
      <header>
        <h1>vetTime</h1>
      </header>
      <main>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Mot de passe:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
