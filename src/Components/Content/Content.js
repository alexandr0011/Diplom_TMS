import {useState} from "react";
import {Tasks} from "./Tasks/Tasks";
import {TaskForm} from "../common/TaskForm/TaskForm";

export const Content = (props) => {
    const [tasks, setTasks] = useState(props.data)

    const addTaskHandler = (title, message) => {
        setTasks([{
            id: tasks.length +1,
            title: title,
            message: message,
            category: '',
            status: false
            }, ...tasks
        ]);
    }


    return (
        <div>
            <h1>CURRENT TASKS</h1>
            <Tasks data={tasks}/>
            <TaskForm onSubmit={addTaskHandler}/>
        </div>
    )
}