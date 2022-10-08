import React, { useState, useEffect } from 'react';
import { authAPI } from 'services';
import { UnauthRoute } from 'routes/UnauthRoute';
import LoginView from './view';
import { useAppDispatch } from 'hooks/redux';
import { login as authLogin } from 'store/reducers/AuthTokenSlice';

const LoginContainer : React.FC = () => {
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ auth, { data } ] = authAPI.useAuthMutation();
  const dispath = useAppDispatch();

  useEffect(() => {
    if(data) {
      dispath(authLogin(data.token));
    }
  }, [data]);

  return (
    <UnauthRoute>
      <LoginView
        login={login}
        setLogin={(event) => setLogin(event.target.value)}
        password={password}
        setPassword={(event) => setPassword(event.target.value)}
        onSubmit={() => auth({login, password})}
      />
    </UnauthRoute>
  );
}

export default LoginContainer;
