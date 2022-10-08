import React, { useState } from 'react';
import HeaderView from './view';

const HeaderContainer : React.FC = () => {
  const [ isMenuOpen, setMenuOpen ] = useState(false);

  return (
    <HeaderView
      isMenuOpen={isMenuOpen}
      onPress={() => setMenuOpen((value) => !value)}
    />
  );
}

export default HeaderContainer;
