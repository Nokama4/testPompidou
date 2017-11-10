/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Field from 'src/containers/Field';


/*
 * Code
 */
class Login extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  }


  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.signInSubmit();
  }

  render() {
    const { data } = this.props;
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <h1 id="login-title">Bienvenue visiteur.</h1>
        <p id="login-text">Veuillez vous connecter afin de poursuivre l'aventure</p>
        {data.map(field => <Field key={field.name} {...field} />)}
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
