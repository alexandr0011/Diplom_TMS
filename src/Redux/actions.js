import {
    COMPLETE_TASK,
    CREATE_TASK,
    DELETE_TASK,
    FETCH_TASK,
    LOGIN_USER, LOGOUT_USER,
} from "./actionTypes";

export const createTaskAction = (newTask) => ({
    type: CREATE_TASK,
    newTask
});

export const completeTaskAction = (taskId, isCompleted) => ({
    type: COMPLETE_TASK,
    taskId,
    isCompleted
});

export const deleteTaskAction = (taskId) => ({
    type: DELETE_TASK,
    taskId
});

export const fetchTaskAction = (tasks) => ({
    type: FETCH_TASK,
    tasks
});

export const loginUserAction = (isAuth) => ({
    type: LOGIN_USER,
    isAuth
});

export const logoutUserAction = (isAuth) => ({
    type: LOGOUT_USER,
    isAuth
})