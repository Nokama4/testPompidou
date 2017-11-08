/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Field from 'src/components/Field';


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
        <div className="login">
          <div className="login-block">
            <span className="login-text">Pseudodyme</span>
            <Field
              type="text"
              name="username"
              className="login-input"
              placeholder="Nom de code"
              required=""
              value={pseudo}
              onChange={this.handleChangePseudo}
            />
          </div>
        </div>
        <div className="login">
          <div className="login-block">
            <span className="login-text">Mot de passe</span>
            <Field
              type="password"
              name="password"
              className="login-input"
              placeholder="Mot de passe"
              required=""
              value={password}
              onChange={this.handleChangePwd}
            />
          </div>
        </div>
        <div className="login">
          <div className="login-block">
            <span className="login-text">Confirmation</span>
            <Field
              type="password"
              name="passwordConf"
              className="login-input"
              placeholder="Mot de passe"
              required=""
              value={passwordConf}
              onChange={this.handleChangePwdConf}
            />
          </div>
        </div>
        <div className="login">
          <div className="login-block">
            <span className="login-text">E-mail</span>
            <Field
              type="text"
              name="email"
              className="login-input"
              placeholder="E-mail"
              required=""
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
        </div>
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
