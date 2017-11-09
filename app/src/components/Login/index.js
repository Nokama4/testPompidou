/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Field from 'src/containers/Field';


/*
 * Code
 */
class Login extends React.Component {
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
        <Field
          type="text"
          name="email"
          textSpan="E-mail"
          placeholder="E-mail"
        />
        <Field
          type="password"
          name="password"
          textSpan="Mot de passe"
          placeholder="Mot de passe"
        />
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
