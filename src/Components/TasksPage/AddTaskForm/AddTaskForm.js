import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskThunk } from '../../../service/middleware';
import { Button, Input, Textarea } from '../../common/formControls/formControls';
import PropTypes from 'prop-types';

export const AddTaskForm = ({ onFormOpen }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const listenerEscape = (event) => {
    if (event.code === 'Escape') {
      onFormOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', listenerEscape);

    return () => {
      window.addEventListener('keydown', listenerEscape);
    };
  });

  const nameInputHandler = (event) => {
    setTaskName(event.target.value);
  };

  const descriptionInputHandler = (event) => {
    setTaskDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createTaskThunk(taskName, taskDescription));
    closeFormHandler();
  };

  const closeFormHandler = () => {
    setTaskName('');
    setTaskDescription('');
    onFormOpen(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <Input
            type="text"
            placeholder="Enter task name"
            onChange={nameInputHandler}
            value={taskName}
          />
        </div>
        <div>
          <Textarea
            placeholder="Enter task description"
            onChange={descriptionInputHandler}
            value={taskDescription}
          />
        </div>
        <div>
          <Button type="submit">OK</Button>
          <Button onClick={closeFormHandler}>Close</Button>
        </div>
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  onFormOpen: PropTypes.func.isRequired,
};
