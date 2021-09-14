import PropTypes from 'prop-types';
import './Task.scss';
import { useDispatch } from 'react-redux';
import { completeTaskThunk, deleteTaskThunk } from '../../../service/middleware';
import { useState } from 'react';

export const Task = ({ id, name, description, completed, removeTask }) => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteTaskThunk(id));
    removeTask(id, name);
  };

  const completeHandler = () => {
    dispatch(completeTaskThunk(id, !completed));
  };

  const showTaskMessage = () => {
    setShowMessage((showMessage) => !showMessage);
  };

  return (
    <div className="taskWrapper">
      <div className="taskContent">
        {!completed ? (
          <p onClick={showTaskMessage}>TITLE</p>
        ) : (
          <p onClick={showTaskMessage}>
            TITLE <span>Выполнено</span>
          </p>
        )}
        <div onClick={showTaskMessage}>{name}</div>
        {showMessage && <p>MESSAGE</p>}
        {showMessage && <div>{description}</div>}
      </div>
      <div>
        <input type="checkbox" checked={completed} onChange={completeHandler} />
        <button onClick={removeHandler}>Remove</button>
      </div>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
};
