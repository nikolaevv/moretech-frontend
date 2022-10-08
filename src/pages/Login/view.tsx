import React from 'react';
import { UnauthRoute } from 'routes/UnauthRoute';

interface ILoginViewProps {
  login: string;
  password: string;
  setLogin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void
}

const LoginView : React.FC<ILoginViewProps> = ({
  login,
  password,
  setLogin,
  setPassword,
  onSubmit
}) =>  {
  return (
    <UnauthRoute>
      <form>
        <input name="login" value={login} onChange={setLogin} />
        <input name="password" value={password} onChange={setPassword} />
        <button onClick={onSubmit}>Login</button>
      </form>
    </UnauthRoute>
  );
}

export default LoginView;
