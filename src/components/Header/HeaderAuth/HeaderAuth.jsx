import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './header-auth.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const HeaderAuth = ({ onClick }) => {
  return (
    <div>
      <NavLink onClick={onClick} to="/login" className={getClassName}>
        Login
      </NavLink>{' '}
      <span className={s.stick}>|</span>
      <NavLink onClick={onClick} to="/register" className={getClassName}>
        Registration
      </NavLink>
    </div>
  );
};

export default HeaderAuth;

HeaderAuth.propTypes = {
  onClick: PropTypes.func.isRequired,
};
