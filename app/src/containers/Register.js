/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Register from 'src/components/Register';
import data from 'src/data';
import { signUpSubmit } from 'src/store/ducks/auth';

/*
 * Code
 */
// State
const mapStateToProps = () => ({
  data: data.registerFields,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
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
