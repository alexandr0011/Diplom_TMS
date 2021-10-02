import {
  getUserNameAction,
  loginUserAction,
  logoutUserAction,
  setServiceErrorsAction,
  toggleIsFetchingAction,
} from '../../Redux/actions';

import { logoutUserService, serverRequest } from '../service';
import { URL } from '../../constants/path';

export const registerUserThunk = (name, email, password) => async (dispatch) => {
  const newUser = {
    name: name,
    email: email,
    password: password,
  };
  try {
    dispatch(toggleIsFetchingAction(true));
    const response = await serverRequest(`${URL}users/register`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
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
    const response = await serverRequest(`${URL}users/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
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
  const token = localStorage.getItem('token');
  try {
    dispatch(toggleIsFetchingAction(true));
    await logoutUserService(token);
    localStorage.removeItem('token');
    dispatch(getUserNameAction(null));
    dispatch(logoutUserAction());
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};
