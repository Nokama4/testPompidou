/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Nav from 'src/components/Nav';
import { withRouter } from 'react-router-dom';

/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const NavContainer = withRouter(createContainer(Nav));


/*
 * Export default
 */
export default NavContainer;
