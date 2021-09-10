import {useDispatch, useSelector} from "react-redux";
import {fetchTaskThunk, logoutUserThunk} from "../../service/middleware";
import {Redirect} from "react-router-dom";
import {AddTask} from "./AddTask";
import {Task} from "./Task/Task";
import {useEffect} from "react";

export const TasksPage = () => {
    const isAuth = useSelector((state) => state.isAuth);
    const tasks = useSelector((state) => state.tasks);

    const dispatch = useDispatch();
    useEffect(() => { /// не забыть проверку на токен, если нет токена то редирект на логин
        dispatch(fetchTaskThunk())
    }, [])

    const logoutHandler = () => {
        dispatch(logoutUserThunk());
        console.log(isAuth)
    }

    if (!isAuth) return <Redirect to='/login'/>

    return(
        <div>
            <div>
                Hello
            </div>
            <div onClick={logoutHandler}>Logout</div>
            <h1>CURRENT TASKS</h1>
            <div>
                <AddTask/>
                {tasks.map((task) => (
                    <Task id={task._id}
                          name={task.name}
                          description={task.description}
                          completed={task.completed}
                          key={task._id}/>
                ))}
            </div>
        </div>
    )
}