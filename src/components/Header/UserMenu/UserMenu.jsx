import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

import s from './user-menu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.mail}>{email}</p>
      <span className={s.stick}>|</span>
      <button className={s.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
