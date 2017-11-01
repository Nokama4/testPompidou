/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Factions from 'src/components/Factions';
import { selectFaction } from 'src/store/ducks/user';
import { loadFactions } from 'src/store/ducks/scenes';


/*
 * Code
 */
// State
const mapStateToProps = (state) => {
  console.log(state.scenes.factions);
  return ({
    factions: state.scenes.factions,
  });
};

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectFaction,
    loadFactions,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FactionsContainer = createContainer(Factions);


/*
 * Export default
 */
export default FactionsContainer;
