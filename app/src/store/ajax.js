/*
 * Npm import
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';

/*
 * Local import
 */
import { PAGE_LOAD, receiveScene, FACTIONS_LOAD, receiveFactions } from 'src/store/ducks/scenes';
import { isAuthenticated, GAME_BEGIN, ACTION_SELECT, saveGameId } from 'src/store/ducks/user';
import { SIGNUP_SUBMIT, SIGNIN_SUBMIT, LOGOUT, LOGIN_SUCCESS, loginSuccess } from 'src/store/ducks/auth';
/*
 * Code
 */

const urlScene = 'http://localhost:3000/scenes';
const urlFactions = 'http://localhost:3000/factions';
const urlSignUp = 'http://localhost:3000/signup';
const urlSignIn = 'http://127.0.0.1:3000/signin';
const url = 'http://localhost:3000/';
const urlBegin = 'http://localhost:3000/begin';
const urlNewAction = 'http://localhost:3000/save';

const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case PAGE_LOAD: {
      const state = store.getState();
      axios
        .post(
          urlScene,
          {
            current: state.user.current,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then(({ data }) => {
          store.dispatch(receiveScene(data));
        });
      break;
    }

    case FACTIONS_LOAD: {
      console.log(localStorage.mytoken);
      const jwt = localStorage.mytoken;
      jwt &&
      axios
        .get(urlFactions, { headers: { authorization: localStorage.mytoken } })
        .then((response) => {
          console.log(response);
          store.dispatch(receiveFactions(response.data));
        });
      break;
    }

    case SIGNUP_SUBMIT: {
      const state = store.getState();
      axios
        .post(urlSignUp, {
          username: state.auth.username,
          password: state.auth.password,
          passwordConf: state.auth.passworConf,
          email: state.auth.email,
        })
        .then((reurlBeginsponse) => {
          localStorage.setItem('mytoken', response.data.token);
          console.log(response);
        });
      break;
    }

    case SIGNIN_SUBMIT: {
      const state = store.getState();
      axios
        .post(urlSignIn, {
          email: state.auth.email,
          password: state.auth.password,
        })
        .then((response) => {
          localStorage.setItem('mytoken', response.data.token);
          const userdecode = jwtDecode(response.data.token);
          store.dispatch(loginSuccess(userdecode));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case LOGIN_SUCCESS: {
      const state = store.getState();
      console.log(localStorage.getItem('mytoken'));
      axios({
        method: 'GET',
        url,
        headers: { authorization: localStorage.mytoken },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(isAuthenticated());
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case LOGOUT: {
      console.log('coucou');
      localStorage.removeItem('mytoken');
      break;
    }

    case GAME_BEGIN: {
      const state = store.getState();
      axios
        .post(
          urlBegin, {
            factionID: state.user.factionID,
            characterName: state.user.name,
            currentScene: state.user.current,
            gender: state.user.gender,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(saveGameId(response.data.game));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }

    case ACTION_SELECT: {
      const state = store.getState();
      console.log('ça marche');
      axios
        .post(
          urlNewAction,
          {
            currentScene: state.user.current,
            game: state.user.game,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
        })
        .catch((res) => {
          console.log(res);
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
