import "./Navbar.scss"
import {NavLink} from "react-router-dom";

export const Navbar = (props) => {
    return (
        <ul className={'navbarContainer'}>
            <li><NavLink to={'/content'}>Content</NavLink></li>
        </ul>
    )
}