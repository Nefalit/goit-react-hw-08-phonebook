import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useAuth from '../../shared/hooks/useAuth';

import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { getAuth } from '../../redux/auth/auth-selectors';
import s from "./register-page.module.css"

const RegisterPage = () => {
  const isLogin = useAuth();
  const { error, loading } = useSelector(getAuth);

  const dispatch = useDispatch();

  const onSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <main>
      <div className="container">
        <h2 className={s.title}>Register Page</h2>
        <RegisterForm onSubmit={onSignup} />
        {loading && <p className="loading">...Loading</p>}
        {error && <p className="error">Error : {error.message}</p>}
        {error && <p className="error">{error.messageForUser}</p>}
      </div>
    </main>
  );
};

export default RegisterPage;
