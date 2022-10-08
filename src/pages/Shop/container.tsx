import React, { useState } from 'react';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import ShopView from './view';

function ShopContainer() {
  const [ isNftShop, setNftShop ] = useState(true);

  return (
    <ProtectedRoute>
      <ShopView
        isNftShop={isNftShop}
        setNftShop={setNftShop}
      />
    </ProtectedRoute>
  );
}

export default ShopContainer;
