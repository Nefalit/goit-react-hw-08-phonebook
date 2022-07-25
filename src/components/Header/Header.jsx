import useAuth from '../../shared/hooks/useAuth';
import { useDispatch } from 'react-redux';

import Logo from './Logo/Logo';
import HeaderAuth from './HeaderAuth/HeaderAuth';
import UserMenu from './UserMenu/UserMenu';

import s from './header.module.css';
import { zeroingErr } from '../../redux/auth/auth-operations';

const Header = () => {
  const isLogin = useAuth();
  const dispatch = useDispatch();

  function zeroing() {
    dispatch(zeroingErr())
  }

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__row}>
          <Logo onClick={zeroing} />
          {isLogin ? <UserMenu /> : <HeaderAuth onClick={zeroing} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
