/*
 * Npm import
 */
import { combineReducers } from 'redux';


/*
 * Local import
 */
import scenes from './scenes';
import user from './user';
import auth from './auth';


/*
 * Code
 */
const reducer = combineReducers({
  scenes,
  user,
  auth,
});


/*
 * Export default
 */
export default reducer;
