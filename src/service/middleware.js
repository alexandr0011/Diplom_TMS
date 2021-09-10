import {
    completeTaskService,
    createTaskService,
    deleteTaskService,
    fetchTaskService,
    loginUserService,
    logoutUserService,
    registerUserService
} from "./service";
import {
    completeTaskAction,
    createTaskAction,
    deleteTaskAction,
    fetchTaskAction,
    loginUserAction,
    logoutUserAction
} from "../Redux/actions";
import {v4} from "uuid";

export const fetchTaskThunk = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    const tasks = await fetchTaskService(token);
    console.log(tasks)
    dispatch(fetchTaskAction(tasks));
};

export const createTaskThunk = (newTaskName, newTaskDescription) => async (dispatch) => {
    const newTaskItem = {
        id: v4(),
        name: newTaskName,
        description: newTaskDescription,
        isCompleted: false,
    }
    const token = localStorage.getItem('token');
    await createTaskService(newTaskItem, token);
    dispatch(createTaskAction(newTaskItem));

    console.log(newTaskItem)
};

export const completeTaskThunk = (taskId, isCompleted) => async (dispatch) => {
    const token = localStorage.getItem('token');
    await completeTaskService(taskId, {completed: isCompleted} , token);
    dispatch(completeTaskAction(taskId, isCompleted));
};

export const deleteTaskThunk = (taskId) => async (dispatch) => {
    const token = localStorage.getItem('token');
    await deleteTaskService(taskId, token);
    dispatch(deleteTaskAction(taskId));
};

export const registerUserThunk = (name, email, password) => async (dispatch) => {
    const newUser = {
        name: name,
        email: email,
        password: password
    }
    try {
        const response = await registerUserService(newUser);
        dispatch(loginUserAction(response.user));
        console.log(response)
    }catch (error) {
        console.log(error);
    }
};

export const loginUserThunk = (email, password) => async (dispatch) => {
    const user = {
        email: email,
        password: password,
    }
    try {
        const response = await loginUserService(user);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', response.user.name);
        dispatch(loginUserAction());
    }catch (error) {
        console.log(error);
    }
};

export const logoutUserThunk = () => async (dispatch) => {
    try{
        const token = localStorage.getItem('token');
        await logoutUserService(token);
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        dispatch(logoutUserAction());
    }catch (error) {
        console.log(error);
    }
};