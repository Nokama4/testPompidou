/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { PAGE_LOAD, receiveScene, FACTIONS_LOAD, receiveFactions } from 'src/store/ducks/scenes';
import { SIGNUP_SUBMIT } from 'src/store/ducks/auth';
/*
 * Code
 */

const urlScene = 'http://localhost:3000/datas';
const urlFactions = 'http://localhost:3000/factions';
const urlSignUp = 'http://localhost:3000/signup';


const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case PAGE_LOAD: {
      const state = store.getState();
      axios
        .post(urlScene, { current: state.user.current })
        .then(({ data }) => {
          store.dispatch(receiveScene(data));
        });
      break;
    }

    case FACTIONS_LOAD: {
      axios
        .get(urlFactions)
        .then((response) => {
          console.log(response);
          store.dispatch(receiveFactions(response.data));
        });
      break;
    }

    case SIGNUP_SUBMIT: {
      const state = store.getState();
      console.log(state.auth.inputEmail);
      console.log(state.auth.inputPwd);
      axios
        .post(urlSignUp, {
          email: state.auth.inputEmail,
          password: state.auth.inputPwd,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(receiveFactions(response.data));
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
