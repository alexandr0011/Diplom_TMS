const url =  'https://tms-task.herokuapp.com/';

export const fetchTaskService = async (token) => {
    const response = await fetch(`${url}tasks`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)

    }
    return response.json();
};

export const createTaskService = async (task, token) => {
    const response = await fetch(`${url}tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)

    }
    return response.json();
};

export const completeTaskService = async (id, completed, token) => {
    const response = await fetch(`${url}tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(completed),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)

    }
    return response.json();
};

export const deleteTaskService = async (id, token) => {
    const response = await fetch(`${url}tasks/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)

    }
    return response.json();
};

export const registerUserService = async (user) => {
    const response = await fetch(`${url}users/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)

    }
    return response.json();
};

export const loginUserService = async (user) => {
    const response = await fetch(`${url}users/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)

    }
    return response.json();
};

export const logoutUserService = async (token) => {
    const response = await fetch(`${url}users/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)
    }
};