import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../service/middleware';

export const Header = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  const userName = localStorage.getItem('userName');

  const logoutHandler = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <header className="headerContainer">
      <ul className="headerLinks">
        {!isAuth && (
          <li>
            <NavLink to={'/login'}>LOGIN</NavLink>
          </li>
        )}
        {!isAuth && (
          <li>
            <NavLink to={'/register'}>REGISTER</NavLink>
          </li>
        )}
        {isAuth && (
          <li>
            <NavLink to={'/tasksPage'}>TASKS</NavLink>
          </li>
        )}
        {isAuth && <p className="userName">Hello {userName}</p>}
        {isAuth && <button onClick={logoutHandler}>LOGOUT</button>}
      </ul>
    </header>
  );
};
