import './TasksPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskThunk } from '../../service/middleware';
import { Redirect } from 'react-router-dom';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { Task } from './Task/Task';
import { useEffect, useState } from 'react';
import { Loader } from '../common/loader/loader';
import { Modal } from '../common/modal/Modal';
import { Button } from '../common/formControls/formControls';
import { Notification } from './Notification/Notification';
import { RemoveTaskNotification } from './Notification/RemoveTaskNotification';
const LOGIN = '/login';

export const TasksPage = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const isFetching = useSelector((state) => state.isFetching);
  const tasks = useSelector((state) => state.tasks);
  const [openForm, setOpenForm] = useState(false);
  const [removeTaskName, setRemovedTaskName] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskThunk());
  }, [dispatch]);

  const showNotificationHandler = (taskId, taskName) => {
    if (taskId !== '') {
      setRemovedTaskName(taskName);
    }
  };

  const closeNotificationHandler = () => {
    setRemovedTaskName();
  };

  const openFormHandler = () => {
    setOpenForm(true);
  };

  if (!isAuth) return <Redirect to={LOGIN} />;

  return (
    <div className="tasksPageWrapper">
      {isFetching && <Loader />}
      <h1>CURRENT TASKS</h1>
      <Button onClick={openFormHandler}>Add Task</Button>
      {openForm && (
        <Modal>
          <AddTaskForm onFormOpen={setOpenForm} />
        </Modal>
      )}
      <div className="tasksListWrapper">
        {tasks.map((task) => (
          <Task
            id={task._id}
            name={task.name}
            description={task.description}
            completed={task.completed}
            key={task._id}
            removeTask={showNotificationHandler}
          />
        ))}
      </div>
      {removeTaskName && (
        <Notification onClose={closeNotificationHandler}>
          <RemoveTaskNotification name={removeTaskName} />
        </Notification>
      )}
    </div>
  );
};
