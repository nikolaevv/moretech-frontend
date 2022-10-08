import { useAppSelector } from "hooks/redux";
import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

interface IUnauthProps {
  children: ReactElement;
}

export const UnauthRoute: React.FC<IUnauthProps> = ({ children }) => {
  const { token } = useAppSelector(state => state.authToken);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    if(token) {
      navigate('/');
    }
  }, [token]);

  if (token) {
    return <Navigate to="/" />;
  }
  return children;
};
