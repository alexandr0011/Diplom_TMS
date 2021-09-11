import {
    COMPLETE_TASK,
    CREATE_TASK,
    DELETE_TASK,
    FETCH_TASK,
    LOGIN_USER,
    LOGOUT_USER,
    TOGGLE_IS_FETCHING
} from "./actionTypes";

const initialState = {
    tasks: [],
    isAuth: false,
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    if (action.type === LOGIN_USER) {
        return {
            ...state,
            isAuth: true
        }
    }
    if (action.type === LOGOUT_USER) {
        return {
            ...state,
            isAuth: false
        }
    }
    if (action.type === FETCH_TASK) {
        return {
            ...state,
            tasks: [...action.tasks]
        }
    }
    if (action.type === CREATE_TASK) {
        return {
            ...state,
            tasks: [action.newTask, ...state.tasks],
        }
    }
    if (action.type === DELETE_TASK) {
        return {
            ...state,
            tasks: state.tasks.filter(({_id}) => _id !== action.taskId)
        }
    }
    if (action.type === COMPLETE_TASK) {
        return {
            ...state,
            tasks: state.tasks.map((task) => {
                if (task._id === action.taskId) {
                    task.completed = action.isCompleted
                }
                return task;
            })
        };
    }
    if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...state,
            isFetching: action.isFetching
        };
    }
    return state
}