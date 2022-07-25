import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './logo.module.css';

const Logo = ({ onClick }) => {
  return (
    <Link onClick={onClick} to="/" className={s.logo}>
      App Phonebook
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  onClick: PropTypes.func.isRequired,
};
