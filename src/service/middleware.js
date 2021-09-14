import {
  completeTaskService,
  createTaskService,
  deleteTaskService,
  fetchTaskService,
  loginUserService,
  logoutUserService,
  registerUserService,
} from './service';
import {
  completeTaskAction,
  createTaskAction,
  deleteTaskAction,
  fetchTaskAction,
  loginUserAction,
  logoutUserAction,
  setServiceErrorsAction,
  toggleIsFetchingAction,
} from '../Redux/actions';

export const fetchTaskThunk = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const tasks = await fetchTaskService(token);
    dispatch(toggleIsFetchingAction(true));
    dispatch(fetchTaskAction(tasks));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const createTaskThunk = (newTaskName, newTaskDescription) => async (dispatch) => {
  const newTaskItem = {
    name: newTaskName,
    description: newTaskDescription,
    isCompleted: false,
  };
  const token = localStorage.getItem('token');
  try {
    dispatch(toggleIsFetchingAction(true));
    const response = await createTaskService(newTaskItem, token);
    dispatch(createTaskAction(response));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const completeTaskThunk = (taskId, isCompleted) => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    dispatch(toggleIsFetchingAction(true));
    await completeTaskService(taskId, { completed: isCompleted }, token);
    dispatch(completeTaskAction(taskId, isCompleted));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const deleteTaskThunk = (taskId) => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    dispatch(toggleIsFetchingAction(true));
    await deleteTaskService(taskId, token);
    dispatch(deleteTaskAction(taskId));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const registerUserThunk = (name, email, password) => async (dispatch) => {
  const newUser = {
    name: name,
    email: email,
    password: password,
  };
  try {
    dispatch(toggleIsFetchingAction(true));
    const response = await registerUserService(newUser);
    localStorage.setItem('token', response.token);
    localStorage.setItem('userName', response.user.name);
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
    const response = await loginUserService(user);
    localStorage.setItem('token', response.token);
    localStorage.setItem('userName', response.user.name);
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
    localStorage.removeItem('userName');
    dispatch(logoutUserAction());
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};
