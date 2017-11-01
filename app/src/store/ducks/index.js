/*
 * Npm import
 */
import { combineReducers } from 'redux';


/*
 * Local import
 */
import scenes from './scenes';
import user from './user';


/*
 * Code
 */
const reducer = combineReducers({
  scenes,
  user,
});


/*
 * Export default
 */
export default reducer;
