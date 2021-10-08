import { LOGIN_USER, LOGOUT_USER } from 'Redux/actionTypes';

const initialState = {
  isAuth: false,
};

export const loginReducer = (state = initialState, action) => {
  if (action.type === LOGIN_USER) {
    return {
      ...state,
      isAuth: true,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      isAuth: false,
    };
  }
  return state;
};
