import { USER_NAME } from 'Redux/actionTypes';

const initialState = {
  userName: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === USER_NAME) {
    return {
      ...state,
      userName: action.userName,
    };
  }
  return state;
};
