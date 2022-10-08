import React from 'react';
import { TextField, Grid, Button } from '@mui/material';

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
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <TextField variant="outlined" name="login" value={login} onChange={setLogin} />
      </Grid>
      <Grid item xs={12}>
        <TextField variant="outlined" name="password" value={password} onChange={setPassword} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>Login</Button>
      </Grid>
    </Grid>
  );
}

export default LoginView;
