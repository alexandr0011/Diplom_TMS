import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../../service/middlewares/authThunk';
import { TASKS_PAGE } from '../../../constants/path';

export const AppLinks = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName.userName);

  const logoutHandler = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <>
      <li>
        <NavLink to={TASKS_PAGE}>TASKS</NavLink>
      </li>
      <p className="userName">Hello {userName}</p>
      <button onClick={logoutHandler}>LOGOUT</button>
    </>
  );
};
