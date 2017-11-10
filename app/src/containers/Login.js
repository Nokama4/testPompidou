/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Login from 'src/components/Login';
import data from 'src/data';
import { signInSubmit } from 'src/store/ducks/auth';


/*
 * Code
 */
// State
const mapStateToProps = () => ({
  data: data.loginFields,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
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
