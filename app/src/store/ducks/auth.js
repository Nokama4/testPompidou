/*
 * Types
 */
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';


/*
 * Initial state
 */
const initialState = {
  logged: false,
  currentUser: '',
  errorMessage: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case INPUT_CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }

    case SIGNUP_SUBMIT: {
      return {
        ...state,
      };
    }

    case SIGNIN_SUBMIT: {
      return {
        ...state,
        logged: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        logged: false,
        errorMessage: action.errorMessage,
      };
    }
    case LOGIN_SUCCESS: {
      console.log('action.user');
      console.log(action.user);
      return {
        ...state,
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: '',
      };
    }
    case LOGOUT: {
      return {
        isAuthenticating: false,
        currentUser: '',
        errorMessage: '',
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */


export const changeInput = ({ name, value }) => ({
  type: INPUT_CHANGE,
  value,
  name,
});

export const signUpSubmit = () => ({
  type: SIGNUP_SUBMIT,
});

export const signInSubmit = () => ({
  type: SIGNIN_SUBMIT,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
