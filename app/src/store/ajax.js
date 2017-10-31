/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { PAGE_LOAD, receiveScene } from 'src/store/reducer';

/*
 * Code
 */

const url = 'http://localhost:3000/datas';

const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case PAGE_LOAD: {
      const state = store.getState();
      axios
        .post(url, { current: state.currentPageID })
        .then(({ data }) => {
          store.dispatch(receiveScene(data));
        });
      break;
    }

    default:
      console.log(action);
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default createMiddleware;
