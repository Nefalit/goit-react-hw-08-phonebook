import PropTypes from 'prop-types';

import useForm from "../../shared/hooks/useForm";

import TextField from "../../shared/components/TextField/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";
import s from "./login-form.module.css"

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { email, password } = state;

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <button className={s.btn} type="submit">Login</button>
        </form>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };