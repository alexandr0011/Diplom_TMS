import { get, patch, post, remove } from 'service/services/service';
import { URL } from 'constants/path';

export const getTasks = () => get(`${URL}tasks`);
export const addTask = (data) => post(`${URL}tasks`, JSON.stringify(data));
export const completeTask = (id, completed) =>
  patch(`${URL}tasks/${id}`, JSON.stringify({ completed }));
export const removeTask = (id) => remove(`${URL}tasks/${id}`);
