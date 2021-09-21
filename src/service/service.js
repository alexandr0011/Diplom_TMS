import { URL } from '../constants/path';

export const logoutUserService = async (token) => {
  const response = await fetch(`${URL}users/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
};

export const serverRequest = async (path, init) => {
  const response = await fetch(path, init);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};
