import "./AddTaskModal.scss";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {createTaskThunk} from "../../../service/middleware";

export const AddTaskModal = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch();

    const listenerEscape = (event) => {
        if (event.code === 'Escape') {
            setOpenForm(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', listenerEscape);

        return () => {
            window.addEventListener('keydown', listenerEscape);
        }
    });

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

    return (
        <div>
            {openForm &&
            <div className='addTaskModalBackdrop'>
                <div className='addTaskModalWrapper'>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type="text"
                                   placeholder='Enter task name'
                                   onChange={nameInputHandler}
                                   value={taskName}/>
                        </div>
                        <div>
                            <textarea placeholder='Enter task description'
                                      onChange={descriptionInputHandler}
                                      value={taskDescription}/>
                        </div>
                        <div>
                            <button type='submit'>OK</button>
                            <button onClick={closeFormHandler}>Close</button>
                        </div>
                    </form>
                </div>
            </div>}
            {!openForm && <button onClick={openFormHandler}>Add Task</button>}
        </div>

    )
}