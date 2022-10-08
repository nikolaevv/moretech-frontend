import React, { useState } from 'react';
import { authAPI } from 'services';
import LoginView from './view';

const LoginContainer : React.FC = () => {
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ auth, {} ] = authAPI.useAuthMutation();

  return (
    <LoginView
      login={login}
      setLogin={(event) => setLogin(event.target.value)}
      password={password}
      setPassword={(event) => setPassword(event.target.value)}
      onSubmit={() => auth({login, password})}
    />
  );
}

export default LoginContainer;
