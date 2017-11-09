/*
 * Npm import
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';

/*
 * Local import
 */
import { PAGE_LOAD, receiveScene, FACTIONS_LOAD, receiveFactions } from 'src/store/ducks/scenes';
import { isAuthenticated } from 'src/store/ducks/user';
import { SIGNUP_SUBMIT, SIGNIN_SUBMIT, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS, loginSuccess, loginFailure, logout } from 'src/store/ducks/auth';
/*
 * Code
 */

const urlScene = 'http://localhost:3000/scenes';
const urlFactions = 'http://localhost:3000/factions';
const urlSignUp = 'http://localhost:3000/signup';
const urlSignIn = 'http://127.0.0.1:3000/signin';
const url = 'http://localhost:3000/';


const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case PAGE_LOAD: {
      const state = store.getState();
      axios
        .post(
          urlScene,
          { current: state.user.current },
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
          username: state.auth.inputPseudo,
          password: state.auth.inputPwd,
          passwordConf: state.auth.inputPwdConf,
          email: state.auth.inputEmail,
        })
        .then((response) => {
          localStorage.setItem('mytoken', response.data.token);
          console.log(response);
        });
      break;
    }

    case SIGNIN_SUBMIT: {
      const state = store.getState();
      axios
        .post(urlSignIn, {
          email: state.auth.inputEmail,
          password: state.auth.inputPwd,
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
