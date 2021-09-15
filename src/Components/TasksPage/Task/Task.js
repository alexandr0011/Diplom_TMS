import PropTypes from 'prop-types';
import './Task.scss';
import { useDispatch } from 'react-redux';
import { completeTaskThunk, deleteTaskThunk } from '../../../service/middleware';
import { useState } from 'react';
import { Button } from '../../common/formControls/formControls';

export const Task = ({ id, name, description, completed, removeTask }) => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteTaskThunk(id));
    removeTask(id, name);
  };

  const completeHandler = (event) => {
    dispatch(completeTaskThunk(id, event.target.checked));
  };

  const showTaskMessage = () => {
    setShowMessage((showMessage) => !showMessage);
  };

  return (
    <div className="taskWrapper">
      <div className="taskContent">
        <p onClick={showTaskMessage}>
          {!completed ? (
            <>TITLE</>
          ) : (
            <>
              TITLE <span>Выполнено</span>
            </>
          )}
        </p>

        <div onClick={showTaskMessage}>{name}</div>
        {showMessage && (
          <>
            <p>MESSAGE</p>
            <div>{description}</div>
          </>
        )}
      </div>
      <div>
        <input type="checkbox" checked={completed} onChange={completeHandler} />
        <Button onClick={removeHandler}>Remove</Button>
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
