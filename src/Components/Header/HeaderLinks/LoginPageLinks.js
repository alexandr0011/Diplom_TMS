import { NavLink } from 'react-router-dom';
import { LOGIN, REGISTER } from 'constants/path';

export const LoginPageLinks = () => {
  return (
    <>
      <li>
        <NavLink to={LOGIN}>LOGIN</NavLink>
      </li>
      <li>
        <NavLink to={REGISTER}>REGISTER</NavLink>
      </li>
    </>
  );
};
