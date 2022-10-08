import { Grid } from '@mui/material';
import React, { useRef } from 'react';
import Logo from '../../assets/Logo.svg';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts'
import './Header.css';

interface IHeaderViewProps {
  isMenuOpen: boolean,
	onPress: (e: boolean) => void,
  onLogout: () => void 
};

const HeaderView : React.FC<IHeaderViewProps> = ({
  isMenuOpen,
	onPress,
  onLogout 
}) => {
  const menuClasses = classNames(
    'nes-container', 
    'with-title', 
    'is-centered',
    'relative',
    { 'opened': isMenuOpen }
  );

  const ref = useRef(null);

  const handleClickOutside = () => {
    onPress(false);
  }

  useOnClickOutside(ref, handleClickOutside);

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
          <div onClick={() => onPress(true)} id="menu-container">
            <img 
              className="nes-avatar is-large" 
              alt="Gravatar image example" 
              src="https://www.gravatar.com/avatar?s=15" 
              style={{imageRendering: 'pixelated'}}
            />
            <div 
              className={menuClasses} 
              style={{backgroundColor: 'white'}}
              ref={ref}
            >
              <p>История</p>
              <p>Статистика</p>
              <p onClick={onLogout}>
                <span className="nes-text is-error">Выход</span>
              </p>
            </div>
          </div>
          </Grid>
        </Grid>  
      </Grid>
    </div>
  );
}

export default HeaderView;
