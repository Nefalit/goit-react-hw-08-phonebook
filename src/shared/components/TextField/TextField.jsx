import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

import s from './text-field.module.css';

const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type,
}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={s.block}>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}:{' '}
        </label>
      )}
      <input
        className={s.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  type: 'text',
  required: false,
};

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};
