import React, { useState } from 'react';
import { authAPI } from 'services';
import { UnauthRoute } from 'routes/UnauthRoute';
import LoginView from './view';

const LoginContainer : React.FC = () => {
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ auth, {} ] = authAPI.useAuthMutation();

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
