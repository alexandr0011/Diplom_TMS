import './Header.scss';
import { useSelector } from 'react-redux';
import { LoginPageLinks } from './HeaderLinks/LoginPageLinks';
import { AppLinks } from './HeaderLinks/AppLinks';

export const Header = () => {
  const isAuth = useSelector((state) => state.login.isAuth);

  return (
    <header className="headerContainer">
      <ul className="headerLinks">
        {!isAuth && <LoginPageLinks />}
        {isAuth && <AppLinks />}
      </ul>
    </header>
  );
};
