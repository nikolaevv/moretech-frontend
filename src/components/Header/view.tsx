import { Grid } from '@mui/material';
import React from 'react';
import Logo from '../../assets/Logo.svg';
import Menu from '../../assets/Menu.svg';
import './Header.css';

const HeaderView : React.FC = () => {
  return (
    <div id="header">
      <Grid container direction={"row"}  alignItems="center">
        <Grid item xs={3}>
          <Grid container justifyContent="center">
            <img src={Logo} alt="Logo" />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent="center">
            <h1 id="title">Teamer</h1>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container justifyContent="center">
            <img src={Menu} alt="Menu" />
          </Grid>
        </Grid>  
      </Grid>
    </div>
  );
}

export default HeaderView;
