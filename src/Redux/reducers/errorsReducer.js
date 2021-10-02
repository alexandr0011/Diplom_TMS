import { SERVICE_ERRORS } from '../actionTypes';

const initialState = {
  errors: [],
};

export const errorsReducer = (state = initialState, action) => {
  if (action.type === SERVICE_ERRORS) {
    return {
      ...state,
      errors: [action.errorMessage],
    };
  }
  return state;
};
