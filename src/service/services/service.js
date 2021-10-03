const getToken = () => localStorage.getItem('token');
const getDefaultHeaders = () => ({
  'Content-Type': 'application/json;charset=utf-8',
  Authorization: `Bearer ${getToken()}`,
});

const logout = async ({ url, method, body, headers }) => {
  const response = await fetch(url, {
    method,
    body,
    headers: { ...getDefaultHeaders(), ...headers },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
};

const request = async ({ url, method, body, headers }) => {
  const response = await fetch(url, {
    method,
    body,
    headers: { ...getDefaultHeaders(), ...headers },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};

export const get = (url) => request({ url });
export const post = (url, body) => request({ url, body, method: 'POST' });
export const remove = (url) => request({ url, method: 'DELETE' });
export const patch = (url, body) => request({ url, body, method: 'PATCH' });
export const out = (url) => logout({ url, method: 'POST' });
