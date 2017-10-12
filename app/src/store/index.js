/*
 * Npm import
 */
import { createStore } from 'redux';


/*
 * Local
 */
import reducer from 'src/store/reducer';


/*
 * Code
 */
const store = createStore(reducer);


/*
 * Export default
 */
export default store;
