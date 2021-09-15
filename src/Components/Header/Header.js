import './Header.scss';
import { useSelector } from 'react-redux';
import { AppLinks, LoginPageLinks } from './HeaderLinks/HeaderLinks';

export const Header = () => {
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <header className="headerContainer">
      <ul className="headerLinks">
        {!isAuth && <LoginPageLinks />}
        {isAuth && <AppLinks />}
      </ul>
    </header>
  );
};
