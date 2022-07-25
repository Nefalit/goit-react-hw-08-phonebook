import PropTypes from 'prop-types';

import useForm from '../../shared/hooks/useForm';

import TextField from '../../shared/components/TextField/TextField';

import { fields } from './fields';
import { initialState } from './initialState';

import s from './register-form.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { name, email, password } = state;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
