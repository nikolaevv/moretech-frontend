import React from 'react';
import { ProtectedRoute } from 'routes/ProtectedRoute';

function HomeContainer() {
  return (
    <ProtectedRoute>
      <h1>Home</h1>
    </ProtectedRoute>
  );
}

export default HomeContainer;
