import './TaskForm.scss'
import {useState} from "react";

export const TaskForm = ({onSubmit, onFormClose}) => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();

        onSubmit(title, message);
        setTitle('');
        setMessage('');
    }

    const titleInputHandler = (event) => {
        setTitle(event.target.value);
    }

    const textInputHandler = (event) => {
        setMessage(event.target.value);
    }
    return(
        <form onSubmit={submitHandler}
              className={'taskFormContainer'}>
            <div>
                <div>
                    <input value={title} onChange={titleInputHandler} type="text" placeholder={'Title'}/>
                </div>
                <div>
                    <input type="text" placeholder={'Category'}/>
                </div>
                <div>
                    <textarea value={message} onChange={textInputHandler} placeholder={'Notes text'} rows='5' cols='23'/>
                </div>
            </div>
            <button type='submit'>Confirm</button>
            <button type='button' onClick={onFormClose}>Close</button>
        </form>
    )
}