import { out, post } from 'service/services/service';
import { URL } from 'constants/path';

export const registerUser = (data) => post(`${URL}users/register`, JSON.stringify(data));
export const loginUser = (data) => post(`${URL}users/login`, JSON.stringify(data));
export const logoutUser = () => out(`${URL}users/logout`);
