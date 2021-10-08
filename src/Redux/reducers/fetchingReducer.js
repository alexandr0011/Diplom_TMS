import { TOGGLE_IS_FETCHING } from 'Redux/actionTypes';

const initialState = {
  isFetching: false,
};

export const fetchingReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  }
  return state;
};
