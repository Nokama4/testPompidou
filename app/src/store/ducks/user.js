/*
 * Types
 */

/*
 * Initial state
 */
const initialState = {
  logged: true,
  factionChoice: false,
  chaConfig: false,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':

    default:
      return state;
  }
};


/*
 * Action creators
 */
