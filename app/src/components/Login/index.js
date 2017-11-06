/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */


/*
 * Code
 */
const Login = () => (
  <div id="login">
    <h1 id="login-title">Bienvenue visiteur.</h1>
    <p id="login-text">Veuillez vous connecter afin de poursuivre l'aventure</p>
    <div className="login">
      <div className="login-block">
        <span className="login-text">Pseudodyme</span>
        <input
          type="text"
          name="username"
          className="login-input"
          placeholder="Nom de code"
          required=""
        />
      </div>
    </div>
    <div className="login">
      <div className="login-block">
        <span className="login-text">Mot de passe</span>
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="Mot de passe"
          required=""
        />
      </div>
    </div>
    <div className="login">
      <div className="login-block">
        <span className="login-text">Confirmation</span>
        <input
          type="password"
          name="passwordConf"
          className="login-input"
          placeholder="Mot de passe"
          required=""
        />
      </div>
    </div>
    <div className="login">
      <button id="login-button-validate">Valider</button>
    </div>
    <p id="login-register">Si vous ne faîtes partie d'aucune faction, veuillez vous enregistrer</p>
    <button id="login-button">ICI</button>
  </div>
);


/*
 * Export default
 */
export default Login;
