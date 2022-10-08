import React from 'react';
import { Grid } from '@mui/material';
import background from "assets/wallpaper.jpg";
import styled from '@emotion/styled';

interface ILoginViewProps {
  login: string;
  password: string;
  setLogin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void
}

const Padding: React.FC = () => {
  return <div style={{height: '25px'}} ></div>
}

const LoginView : React.FC<ILoginViewProps> = ({
  login,
  password,
  setLogin,
  setPassword,
  onSubmit
}) =>  {
  return (
    <Backdround>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <div className="nes-container with-title is-centered opened" style={{backgroundColor: 'white'}}>
          <span className="nes-text is-primary">Здесь стартует твоё приключение</span>
          <Padding/>
          <div className="nes-field">
            <label htmlFor="name_field">Логин</label>
            <input type="text" id="name_field" className="nes-input" value={login} onChange={setLogin} />
          </div>
          <Padding/>
          <div className="nes-field">
            <label htmlFor="name_field">Пароль</label>
            <input type="text" id="name_field" className="nes-input" value={password} onChange={setPassword} />
          </div>
          <Padding/>
          <button type="button" className="nes-btn is-primary" onClick={onSubmit}>Старт!</button>
        </div>
      </Grid>
    </Backdround>
  );
}

const Backdround = styled.div`
	height: 100vh;
  overflow-y: hidden;
	width: 100%;
	background-image: url('${background}');
  background-size: auto auto;
`;


export default LoginView;
