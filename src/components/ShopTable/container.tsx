import React, { useState } from 'react';
import ShopTableView from '../../components/ShopTable/view';

const ShopContainer : React.FC = () => {
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  //const [ ]

  return (
    <ShopTableView
      isNftShop={isMenuOpen}
     // onPress={() => setMenuOpen((value) => !value)}
    />
  );
}

export default ShopContainer;
