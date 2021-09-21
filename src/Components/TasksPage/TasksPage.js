import './TasksPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskThunk } from '../../service/middlewares/tasksThunk';
import { Redirect } from 'react-router-dom';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { Task } from './Task/Task';
import { useEffect, useState } from 'react';
import { Loader } from '../common/loader/loader';
import { Modal } from '../common/modal/Modal';
import { Notification } from './Notification/Notification';
import { RemoveTaskNotification } from './Notification/RemoveTaskNotification';
import { LOGIN } from '../../constants/path';
import { Button } from '../common/formControls/Button';

export const TasksPage = () => {
  const state = useSelector((state) => state);
  const isAuth = state.login.isAuth;
  const isFetching = state.fetching.isFetching;
  const tasks = state.tasks.tasks;
  const [openForm, isFormOpened] = useState(false);
  const [removedTaskName, setRemovedTaskName] = useState('');

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
    isFormOpened(true);
  };

  if (!isAuth) return <Redirect to={LOGIN} />;

  return (
    <div className="tasksPageWrapper">
      {isFetching && <Loader />}
      <h1>CURRENT TASKS</h1>
      <Button onClick={openFormHandler}>Add Task</Button>
      {openForm && (
        <Modal>
          <AddTaskForm onFormClose={isFormOpened} />
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
      {removedTaskName && (
        <Notification onClose={closeNotificationHandler}>
          <RemoveTaskNotification name={removedTaskName} />
        </Notification>
      )}
    </div>
  );
};
