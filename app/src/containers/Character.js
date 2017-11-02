/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Character from 'src/components/Character';
import { nameTyping, changeGender, selectCharacter, beginGame } from 'src/store/ducks/user';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  name: state.user.inputName,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    nameTyping,
    changeGender,
    selectCharacter,
    beginGame,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CharacterContainer = createContainer(Character);


/*
 * Export default
 */
export default CharacterContainer;
