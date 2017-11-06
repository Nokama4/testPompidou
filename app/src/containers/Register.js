/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Register from 'src/components/Register';
import { emailTyping, pwdConfTyping, pwdTyping, pseudoTyping, signUpSubmit } from 'src/store/ducks/auth';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  email: state.auth.inputEmail,
  pseudo: state.auth.inputPseudo,
  password: state.auth.inputPwd,
  passwordConf: state.auth.inputPwdConf,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    emailTyping,
    pwdConfTyping,
    pwdTyping,
    pseudoTyping,
    signUpSubmit,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const RegisterContainer = createContainer(Register);


/*
 * Export default
 */
export default RegisterContainer;
