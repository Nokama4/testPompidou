/*
 * Types
 */
export const PAGE_LOAD = 'PAGE_LOAD';
export const SCENE_RECEIVE = 'SCENE_RECEIVE';

/*
 * Initial state
 */
const initialState = {
  currentPageID: 1,
  loaded: false,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case PAGE_LOAD: {
      return {
        ...state,
      };
    }

    case SCENE_RECEIVE: {
      console.log(action.data.actions);
      return {
        ...state,
        actions: action.data.actions,
        text: action.data.description,
        title: action.data.title,
        loaded: true,
      };
    }
    default:
      return state;
  }
};


/*
 * Action creators
 */
export const loadCurrentPage = () => ({
  type: 'PAGE_LOAD',
});

export const receiveScene = data => ({
  type: 'SCENE_RECEIVE',
  data,
});
