import './Header.scss'
import {NavLink} from "react-router-dom";

export const Header = () => {

    return(
        <header className='headerContainer'>
            <ul>
                <li><NavLink to={'/login'}>LOGIN</NavLink></li>
                <li><NavLink to={'/register'}>REGISTER</NavLink></li>
                <li><NavLink to={'/tasksPage'}>TASKS</NavLink></li>
            </ul>
        </header>
    )
}