/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Login from 'src/components/Login';
import { emailTyping, pwdTyping, signInSubmit } from 'src/store/ducks/auth';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  email: state.auth.inputEmail,
  password: state.auth.inputPwd,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    emailTyping,
    pwdTyping,
    signInSubmit,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const LoginContainer = createContainer(Login);


/*
 * Export default
 */
export default LoginContainer;
