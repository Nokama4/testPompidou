/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Game from 'src/components/Game';
import { loadCurrentPage } from 'src/store/ducks/scenes';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  text: state.scenes.text,
  title: state.scenes.title,
  actions: state.scenes.actions,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadCurrentPage,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const GameContainer = createContainer(Game);


/*
 * Export default
 */
export default GameContainer;
