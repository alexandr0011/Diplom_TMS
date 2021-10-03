import './Header.scss';
import { useSelector } from 'react-redux';
import { LoginPageLinks } from 'components/Header/HeaderLinks/LoginPageLinks';
import { AppLinks } from 'components/Header/HeaderLinks/AppLinks';

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
