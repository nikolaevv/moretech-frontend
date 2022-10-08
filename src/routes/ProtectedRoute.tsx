import { Header } from "components/Header";
import { useAppSelector } from "hooks/redux";
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  const { token } = useAppSelector(state => state.authToken);

  if (!token) {
    //return <Navigate to="/login" />;
  }
  return children;
};
