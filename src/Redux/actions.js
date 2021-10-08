import {
  CREATE_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  FETCH_TASK,
  LOGIN_USER,
  LOGOUT_USER,
  TOGGLE_IS_FETCHING,
  SERVICE_ERRORS,
  USER_NAME,
} from './actionTypes';

export const createTaskAction = (newTask) => ({
  type: CREATE_TASK,
  newTask,
});

export const completeTaskAction = (taskId, isCompleted) => ({
  type: COMPLETE_TASK,
  taskId,
  isCompleted,
});

export const deleteTaskAction = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

export const fetchTaskAction = (tasks) => ({
  type: FETCH_TASK,
  tasks,
});

export const loginUserAction = (isAuth) => ({
  type: LOGIN_USER,
  isAuth,
});

export const logoutUserAction = (isAuth) => ({
  type: LOGOUT_USER,
  isAuth,
});

export const toggleIsFetchingAction = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const setServiceErrorsAction = (errorMessage) => ({
  type: SERVICE_ERRORS,
  errorMessage,
});

export const getUserNameAction = (userName) => ({
  type: USER_NAME,
  userName,
});
