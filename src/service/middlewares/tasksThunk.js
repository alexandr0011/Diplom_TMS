import {
  completeTaskAction,
  createTaskAction,
  deleteTaskAction,
  fetchTaskAction,
  setServiceErrorsAction,
  toggleIsFetchingAction,
} from '../../Redux/actions';

import { serverRequest } from '../service';
import { URL } from '../../constants/path';

export const fetchTaskThunk = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const tasks = await serverRequest(`${URL}tasks`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    });
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
    const response = await serverRequest(`${URL}tasks`, {
      method: 'POST',
      body: JSON.stringify(newTaskItem),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    });
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
    await serverRequest(`${URL}tasks/${taskId}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: isCompleted }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    });
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
    await serverRequest(`${URL}tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(deleteTaskAction(taskId));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};
