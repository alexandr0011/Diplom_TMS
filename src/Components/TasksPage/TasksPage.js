import "./TasksPage.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchTaskThunk} from "../../service/middleware";
import {Redirect} from "react-router-dom";
import {AddTaskModal} from "./AddTaskModal/AddTaskModal";
import {Task} from "./Task/Task";
import {useEffect, useState} from "react";
import {Notification} from "./Notification/Notification";
import {Loader} from "../common/loader/loader";

export const TasksPage = () => {
    const isAuth = useSelector((state) => state.isAuth);
    const isFetching = useSelector((state) => state.isFetching);
    const tasks = useSelector((state) => state.tasks);
    const [removeTask, setRemoveTask] = useState(false);
    const [removeTaskName, setRemoveTaskName] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTaskThunk())
    }, [dispatch])

    const showNotificationHandler = (taskId, taskName) => {
        if(taskId !== '') {
            setRemoveTask(true);
        }
        setRemoveTaskName(taskName);
    }

    const closeNotificationHandler = () => {
        setRemoveTask(false);
    }

    if (!isAuth) return <Redirect to='/login'/>

    return(
        <div className='tasksPageWrapper'>
            {isFetching && <Loader/>}
            <h1>CURRENT TASKS</h1>
            <AddTaskModal/>
            <div className='tasksListWrapper'>
                {tasks.map((task) => (
                    <Task id={task._id}
                          name={task.name}
                          description={task.description}
                          completed={task.completed}
                          key={task._id}
                          removeTask={showNotificationHandler}/>
                ))}
            </div>
            {removeTask && <Notification name={removeTaskName}
                                         onClose={closeNotificationHandler}/>}

        </div>
    )
}