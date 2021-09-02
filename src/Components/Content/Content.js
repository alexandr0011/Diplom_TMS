import {useState} from "react";
import {Tasks} from "./Tasks/Tasks";
import {TaskForm} from "../common/TaskForm/TaskForm";

export const Content = (props) => {
    const [tasks, setTasks] = useState(props.data)
    const [isFormOpened, setIsFormOpened] = useState('false')

    const addTaskHandler = (title, message) => {
        setTasks([{
            id: tasks.length +1,
            title: title,
            message: message,
            category: '',
            status: false
            }, ...tasks
        ]);
        setIsFormOpened(false);
    }

    const openFormHandler = () => {
        setIsFormOpened(true);
    }

    const closeFormHandler = () => {
        setIsFormOpened(false);
    }


    return (
        <div>
            <button onClick={openFormHandler}>Open Form</button>
            <h1>CURRENT TASKS</h1>

            {isFormOpened && (
                <TaskForm onSubmit={addTaskHandler}
                          onFormClose={closeFormHandler}
                />)
            }

            <Tasks data={tasks}/>
        </div>
    )
}