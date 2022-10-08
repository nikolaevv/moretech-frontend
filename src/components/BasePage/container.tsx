import React, { useState } from 'react';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import HomeView from './view';

export enum MainPageState {
  MAIN = "MAIN",
  SHOP = "SHOP"
};

function HomeContainer() {
  const [ mainPageState, setPageState ] = useState(MainPageState.MAIN);

  return (
    <ProtectedRoute>
      <HomeView
        mainPageState={mainPageState}
        setPageState={setPageState}
      />
    </ProtectedRoute>
  );
}

export default HomeContainer;
