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
class Register extends React.Component {
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
    this.props.actions.signUpSubmit();
  }
  render() {
    const { data } = this.props;
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <h1 id="login-title">Bienvenue visiteur.</h1>
        <p id="login-inscription">Veuillez remplir ce questionnaire avant de continuer.</p>
        <p id="login-responsability">(Nous déclinons toutes responsabilités quand à l'usage frauduleux de vos données  personnelles par des I.A malveillantes.)</p>
        {data.map(field => <Field key={field.name} {...field} />)}
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
