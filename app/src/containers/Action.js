/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Action from 'src/components/Actions/Action';
import { loadCurrentPage } from 'src/store/ducks/scenes';
import { selectAction } from 'src/store/ducks/user';


/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadCurrentPage,
    selectAction,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ActionContainer = createContainer(Action);


/*
 * Export default
 */
export default ActionContainer;
