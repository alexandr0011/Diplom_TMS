import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTaskThunk} from "../../service/middleware";

export const AddTask = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch();

    const nameInputHandler = (event) => {
        setTaskName(event.target.value);
    }

    const descriptionInputHandler = (event) => {
        setTaskDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createTaskThunk(taskName, taskDescription));
        closeFormHandler();
    }

    const openFormHandler = () => {
        setOpenForm(true);
    }

    const closeFormHandler = () => {
        setTaskName('');
        setTaskDescription('');
        setOpenForm(false);
    }

    return(
        <div>
            {openForm && <form onSubmit={submitHandler}>
                <div><input type="text"
                            placeholder='Enter task name'
                            onChange={nameInputHandler} value={taskName}/>
                </div>
                <div><input type="text"
                            placeholder='Enter task description'
                            onChange={descriptionInputHandler} value={taskDescription}/>
                </div>
                <div>
                    <button type='submit'>OK</button>
                    <button onClick={closeFormHandler}>Close</button>
                </div>
            </form>}
            {!openForm && <button onClick={openFormHandler}>Add Task</button>}
        </div>

    )
}