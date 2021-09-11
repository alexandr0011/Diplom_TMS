import PropTypes from "prop-types";
import "./Task.scss";
import {useDispatch} from "react-redux";
import {completeTaskThunk, deleteTaskThunk} from "../../../service/middleware";

export const Task = ({id, name, description, completed, removeTask}) => {

    const dispatch = useDispatch();

    const removeHandler = () => {
        dispatch(deleteTaskThunk(id));
        removeTask(id, name);
    }

    const completeHandler = () => {
        dispatch(completeTaskThunk(id, !completed))
    }

    return(
        <div className='taskWrapper'>
            <div>
                <div>Task title {name}</div>
                <div>Task message {description}</div>
            </div>
            <div>
                <input type="checkbox" checked={completed} onChange={completeHandler}/>
                <button onClick={removeHandler}>Remove</button>
            </div>
        </div>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    removeTask: PropTypes.func.isRequired
}