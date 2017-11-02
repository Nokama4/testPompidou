/*
 * Types
 */
export const FACTION_SELECT = 'FACTION_SELECT';
export const NAME_TYPING = 'NAME_TYPING';
export const GENDER_CHANGE = 'GENDER_CHANGE';
export const CHARACTER_SELECT = 'CHARACTER_SELECT';
export const GAME_BEGIN = 'GAME_BEGIN';
export const ACTION_SELECT = 'ACTION_SELECT';

/*
 * Initial state
 */
const initialState = {
  status: 'faction',
  inputName: '',
  gender: '',
  name: '',
  current: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case FACTION_SELECT: {
      console.log(action.id);
      return {
        ...state,
        status: 'character',
        factionID: action.id,
      };
    }

    case NAME_TYPING: {
      return {
        ...state,
        inputName: action.value,
      };
    }

    case GENDER_CHANGE: {
      return {
        ...state,
        gender: action.value,
      };
    }

    case CHARACTER_SELECT: {
      return {
        ...state,
        status: 'game',
        name: state.inputName,
      };
    }

    case GAME_BEGIN: {
      return {
        ...state,
        current: 1,
      };
    }

    case ACTION_SELECT: {
      return {
        ...state,
        current: action.id,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const selectFaction = id => ({
  type: 'FACTION_SELECT',
  id,
});

export const nameTyping = value => ({
  type: 'NAME_TYPING',
  value,
});

export const changeGender = value => ({
  type: 'GENDER_CHANGE',
  value,
});

export const selectCharacter = () => ({
  type: 'CHARACTER_SELECT',
});

export const beginGame = () => ({
  type: 'GAME_BEGIN',
});

export const selectAction = id => ({
  type: 'ACTION_SELECT',
  id,
});
