import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTaskThunk} from "../../service/middleware";

export const AddTask = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
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
        setTaskName('');
        setTaskDescription('');
    }


    return(
        <form onSubmit={submitHandler}>
            <div><input type="text"
                        placeholder='Enter task name'
                        onChange={nameInputHandler}/>
            </div>
            <div><input type="text"
                        placeholder='Enter task description'
                        onChange={descriptionInputHandler}/>
            </div>
            <div>
                <button type='submit'>OK</button>
            </div>
        </form>
    )
}