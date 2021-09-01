import './Header.scss'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={'headerContainer'}>
            Hello USER --- <NavLink to={'/login'}>Login</NavLink>
        </header>
    )
}