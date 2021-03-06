/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Desktop from 'src/components/Desktop';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  status: state.user.status,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const DesktopContainer = withRouter(createContainer(Desktop));


/*
 * Export default
 */
export default DesktopContainer;
