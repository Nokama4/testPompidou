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
  logged: state.user.logged,
  factionChoice: state.user.logged,
  chaConfig: state.user.logged,
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
