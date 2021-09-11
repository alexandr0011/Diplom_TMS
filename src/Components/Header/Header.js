import './Header.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUserThunk} from "../../service/middleware";

export const Header = () => {

    const isAuth = useSelector((state) => state.isAuth);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUserThunk());
    }

    return(
        <header className='headerContainer'>
            <ul>
                <li><NavLink to={'/login'}>LOGIN</NavLink></li>
                <li><NavLink to={'/register'}>REGISTER</NavLink></li>
                <li><NavLink to={'/tasksPage'}>TASKS</NavLink></li>
                {isAuth && <button onClick={logoutHandler}>LOGOUT</button>}
            </ul>
        </header>
    )
}
