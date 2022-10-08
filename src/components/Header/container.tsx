import { useAppDispatch } from 'hooks/redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from 'store/reducers/AuthTokenSlice';
import HeaderView from './view';

const HeaderContainer : React.FC = () => {
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  return (
    <HeaderView
      isMenuOpen={isMenuOpen}
      onPress={(value) => setMenuOpen(value)}
      onLogout={onLogout}
    />
  );
}

export default HeaderContainer;
