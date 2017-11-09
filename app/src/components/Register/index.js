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
class Register extends React.Component {
  handleChangeEmail = (evt) => {
    const { value } = evt.target;
    this.props.actions.emailTyping(value);
  }

  handleChangePseudo = (evt) => {
    const { value } = evt.target;
    this.props.actions.pseudoTyping(value);
  }

  handleChangePwd = (evt) => {
    const { value } = evt.target;
    this.props.actions.pwdTyping(value);
  }

  handleChangePwdConf = (evt) => {
    const { value } = evt.target;
    this.props.actions.pwdConfTyping(value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.signUpSubmit();
  }
  render() {
    const { pseudo, password, email, passwordConf } = this.props;
    console.log(pseudo);
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <h1 id="login-title">Bienvenue visiteur.</h1>
        <p id="login-inscription">Veuillez remplir ce questionnaire avant de continuer.</p>
        <p id="login-responsability">(Nous déclinons toutes responsabilités quand à l'usage frauduleux de vos données  personnelles par des I.A malveillantes.)</p>
        <Field
          type="text"
          name="username"
          textSpan="Pseudonyme"
          placeholder="Nom de code"
          onChange={this.handleChangePseudo}
        />
        <Field
          type="password"
          name="password"
          textSpan="Mot de passe"
          placeholder="Mot de passe"
          onChange={this.handleChangePwd}
        />
        <Field
          type="password"
          name="passwordConf"
          textSpan="Confirmation"
          placeholder="Mot de passe"
          onChange={this.handleChangePwdConf}
        />
        <Field
          type="text"
          name="email"
          textSpan="E-mail"
          placeholder="E-mail"
          onChange={this.handleChangeEmail}
        />
        <div className="login">
          <button id="login-button-validate">Valider</button>
        </div>
        <p id="login-register">Si vous faîtes déjà partie d'une faction, veuillez vous authentifier</p>
        <button id="login-button">ICI</button>
      </form>
    );
  }
}

/*
 * Export default
 */
export default Register;
