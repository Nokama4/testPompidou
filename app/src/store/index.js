/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from './reducer';
import ajax from './ajax';


/*
 * Code
 */
// DevTools
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Enhancers
const ajaxMiddleware = applyMiddleware(ajax);
const enhancers = compose(ajaxMiddleware, ...devTools);

// Store
const store = createStore(reducer, enhancers);


/*
 * Export default
 */
export default store;
