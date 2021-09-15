import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../../../service/middleware';

export const LoginPageLinks = () => {
  return (
    <>
      <li>
        <NavLink to={'/login'}>LOGIN</NavLink>
      </li>
      <li>
        <NavLink to={'/register'}>REGISTER</NavLink>
      </li>
    </>
  );
};

export const AppLinks = () => {
  const dispatch = useDispatch();
  const userName = localStorage.getItem('userName');

  const logoutHandler = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <>
      <li>
        <NavLink to={'/tasksPage'}>TASKS</NavLink>
      </li>
      <p className="userName">Hello {userName}</p>
      <button onClick={logoutHandler}>LOGOUT</button>
    </>
  );
};
