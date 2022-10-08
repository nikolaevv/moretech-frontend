import { Grid } from '@mui/material';
import React from 'react';
import Logo from 'assets/Logo.svg';
import Menu from 'assets/Menu.svg';
import './Header.css';

const HeaderView : React.FC = () => {
  return (
    <div>
      <Grid container direction={"row"}>
        <Grid item xs={3}>
          <Logo />
        </Grid>
        <Grid item xs={3}>
          <h1>Teamer</h1>
        </Grid>
        <Grid item xs={3}>
          <Menu />
        </Grid>  
      </Grid>
    </div>
  );
}

export default HeaderView;
