/*
 * Npm import
 */
import { connect } from 'react-redux';


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
const DesktopContainer = createContainer(Desktop);


/*
 * Export default
 */
export default DesktopContainer;
