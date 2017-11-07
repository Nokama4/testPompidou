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
class Login extends React.Component {
  handleChangeEmail = (evt) => {
    const { value } = evt.target;
    console.log(value);
    this.props.actions.emailTyping(value);
  }

  handleChangePassword = (evt) => {
    const { value } = evt.target;
    this.props.actions.pwdTyping(value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.signInSubmit();
  }

  render() {
    const { email, password } = this.props;
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <h1 id="login-title">Bienvenue visiteur.</h1>
        <p id="login-text">Veuillez vous connecter afin de poursuivre l'aventure</p>
        <div className="login">
          <div className="login-block">
            <span className="login-text">Email</span>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              required=""
              value={email}
              onChange={this.handleChangeEmail}
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
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
        </div>
        <div className="login">
          <button id="login-button-validate">Valider</button>
        </div>
        <p id="login-register">Si vous ne faîtes partie d'aucune faction, veuillez vous enregistrer</p>
        <button id="login-button">ICI</button>
      </form>
    );
  }
}


/*
 * Export default
 */
export default Login;
