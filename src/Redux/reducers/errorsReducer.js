import { SERVICE_ERRORS } from 'Redux/actionTypes';

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
