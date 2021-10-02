import { CREATE_TASK, COMPLETE_TASK, DELETE_TASK, FETCH_TASK } from '../actionTypes';

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  if (action.type === FETCH_TASK) {
    return {
      ...state,
      tasks: [...action.tasks],
    };
  }
  if (action.type === CREATE_TASK) {
    return {
      ...state,
      tasks: [action.newTask, ...state.tasks],
    };
  }
  if (action.type === DELETE_TASK) {
    return {
      ...state,
      tasks: state.tasks.filter(({ _id }) => _id !== action.taskId),
    };
  }
  if (action.type === COMPLETE_TASK) {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task._id === action.taskId) {
          task.completed = action.isCompleted;
        }
        return task;
      }),
    };
  }
  return state;
};
