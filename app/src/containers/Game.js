/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Game from 'src/components/Game';
import { loadCurrentPage } from 'src/store/reducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  text: state.text,
  title: state.title,
  actions: state.actions,
  loaded: state.loaded,
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
