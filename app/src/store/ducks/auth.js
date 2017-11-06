/*
 * Types
 */
export const EMAIL_TYPING = 'EMAIL_TYPING';
export const PWD_TYPING = 'PWD_TYPING';
export const PWDCONF_TYPING = 'PWDCONF_TYPING';
export const PSEUDO_TYPING = 'PSEUDO_TYPING';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
/*
 * Initial state
 */
const initialState = {
  inputEmail: '',
  inputPwd: '',
  inputPwdConf: '',
  inputPseudo: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case EMAIL_TYPING: {
      return {
        ...state,
        inputEmail: action.value,
      };
    }

    case PWD_TYPING: {
      return {
        ...state,
        inputPwd: action.value,
      };
    }

    case PWDCONF_TYPING: {
      return {
        ...state,
        inputPwdConf: action.value,
      };
    }

    case PSEUDO_TYPING: {
      return {
        ...state,
        inputPseudo: action.value,
      };
    }

    case SIGNUP_SUBMIT: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */

export const emailTyping = value => ({
  type: 'EMAIL_TYPING',
  value,
});

export const pwdTyping = value => ({
  type: 'PWD_TYPING',
  value,
});

export const pwdConfTyping = value => ({
  type: 'PWDCONF_TYPING',
  value,
});

export const pseudoTyping = value => ({
  type: 'PSEUDO_TYPING',
  value,
});

export const signUpSubmit = () => ({
  type: 'SIGNUP_SUBMIT',
});
