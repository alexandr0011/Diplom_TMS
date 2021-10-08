import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskThunk } from 'service/middlewares/tasksThunk';
import PropTypes from 'prop-types';
import { Input } from 'components/common/formControls/Input';
import { Textarea } from 'components/common/formControls/Textarea';
import { Button } from 'components/common/formControls/Button';

export const AddTaskForm = ({ onFormClose }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

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
    onFormClose(false);
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
  onFormClose: PropTypes.func.isRequired,
};
