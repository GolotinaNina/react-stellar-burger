import { useAppSelector } from "../../services/store";
import { Navigate, useLocation } from "react-router-dom";
import { FC } from "react";
import { IProtected, INotProtected } from "../../types/types";

const Protected: FC<IProtected> = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useAppSelector((store) => store.user.isAuthChecked);
  const user = useAppSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user?.email?.length) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user?.email?.length) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return component;
};


export const OnlyAuth = Protected;
export const OnlyUnAuth: FC<INotProtected> = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);
