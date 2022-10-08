import { Grid } from '@mui/material';
import React from 'react';
import Logo from '../../assets/Logo.svg';
import classNames from 'classnames';
import './Header.css';

interface IHeaderViewProps {
  isMenuOpen: boolean,
	onPress: () => void, 
};

const HeaderView : React.FC<IHeaderViewProps> = ({
  isMenuOpen,
	onPress, 
}) => {
  const menuClasses = classNames(
    'nes-container', 
    'with-title', 
    'is-centered',
    'relative',
    { 'opened': isMenuOpen }
  );

  console.log(menuClasses);
  console.log(isMenuOpen);

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
            <span 
              className="nes-text is-primary"
              style={{fontSize: 37}}
            >
              Teamer
            </span>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container justifyContent="center">
          <div onClick={onPress} id="menu-container">
            <img 
              className="nes-avatar is-large" 
              alt="Gravatar image example" 
              src="https://www.gravatar.com/avatar?s=15" 
              style={{imageRendering: 'pixelated'}}
            />
            <div className={menuClasses}>
              <p className="title">Меню</p>
              <p></p>
              <p></p>
            </div>
          </div>
          </Grid>
        </Grid>  
      </Grid>
    </div>
  );
}

export default HeaderView;
