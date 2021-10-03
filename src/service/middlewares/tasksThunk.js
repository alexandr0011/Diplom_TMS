import {
  completeTaskAction,
  createTaskAction,
  deleteTaskAction,
  fetchTaskAction,
  setServiceErrorsAction,
  toggleIsFetchingAction,
} from 'Redux/actions';

import {
  addTask,
  completeTask,
  getTasks,
  removeTask,
} from 'service/services/tasksService';

export const fetchTaskThunk = () => async (dispatch) => {
  try {
    const tasks = await getTasks();
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
  try {
    dispatch(toggleIsFetchingAction(true));
    const response = await addTask(newTaskItem);
    dispatch(createTaskAction(response));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const completeTaskThunk = (taskId, isCompleted) => async (dispatch) => {
  try {
    dispatch(toggleIsFetchingAction(true));
    await completeTask(taskId, isCompleted);
    dispatch(completeTaskAction(taskId, isCompleted));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};

export const deleteTaskThunk = (taskId) => async (dispatch) => {
  try {
    dispatch(toggleIsFetchingAction(true));
    await removeTask(taskId);
    dispatch(deleteTaskAction(taskId));
  } catch (error) {
    dispatch(setServiceErrorsAction(error.message));
  } finally {
    dispatch(toggleIsFetchingAction(false));
  }
};
