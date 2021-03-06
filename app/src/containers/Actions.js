/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Actions from 'src/components/Actions';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  actions: state.scenes.actions,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ActionsContainer = createContainer(Actions);


/*
 * Export default
 */
export default ActionsContainer;
