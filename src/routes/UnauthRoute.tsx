import { useAppSelector } from "hooks/redux";
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface IUnauthProps {
  children: ReactElement;
}

export const UnauthRoute: React.FC<IUnauthProps> = ({ children }) => {
  const { token } = useAppSelector(state => state.authToken);

  if (token) {
    return <Navigate to="/" />;
  }
  return children;
};
