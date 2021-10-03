import {
  getUserNameAction,
  loginUserAction,
  logoutUserAction,
  setServiceErrorsAction,
  toggleIsFetchingAction,
} from 'Redux/actions';

import { loginUser, logoutUser, registerUser } from 'service/services/authService';

export const registerUserThunk = (name, email, password) => async (dispatch) => {
  const newUser = {
    name: name,
    email: email,
    password: password,
  };
  try {
    dispatch(toggleIsFetchingAction(true));
    const response = await registerUser(newUser);
    localStorage.setItem('token', response.token);
    dispatch(getUserNameAction(response.user.name));
    dispatch(loginUserAction());
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const loginUserThunk = (email, password) => async (dispatch) => {
  const user = {
    email: email,
    password: password,
  };
  try {
    dispatch(toggleIsFetchingAction(true));
    const response = await loginUser(user);
    localStorage.setItem('token', response.token);
    dispatch(getUserNameAction(response.user.name));
    dispatch(loginUserAction());
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const logoutUserThunk = () => async (dispatch) => {
  try {
    dispatch(toggleIsFetchingAction(true));
    await logoutUser();
    localStorage.removeItem('token');
    dispatch(getUserNameAction(null));
    dispatch(logoutUserAction());
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};
