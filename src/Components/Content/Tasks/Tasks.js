import {NewTask} from "./NewTask/NewTask";

export const Tasks = (props) => {
    const TasksElements = props.data.map((item) => {
        return <NewTask key={item.id}
                        title={item.title}
                        message={item.message}
                        status={item.status}/>
    })
    return(
        <div>
            {TasksElements}
        </div>
    )
}