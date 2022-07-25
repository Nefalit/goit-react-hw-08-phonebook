import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import useAuth from '../../shared/hooks/useAuth';
import { getAuth } from '../../redux/auth/auth-selectors';


import { login } from '../../redux/auth/auth-operations';

import LoginForm from '../../components/LoginForm/LoginForm';

import s from "./login-page.module.css"

const LoginPage = () => {
  const isLogin = useAuth();
  const { error, loading } = useSelector(getAuth);


  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <main>
      <div className="container">
        <h2 className={s.title}>Login Page</h2>
        <LoginForm onSubmit={onLogin} />
        {loading && <p className="loading">...Loading</p>}
        {error && <p className="error">Error : {error.message}</p>}
        {error && <p className="error">Bad password or email, try again...</p>}
      </div>
    </main>
  );
};

export default LoginPage;
