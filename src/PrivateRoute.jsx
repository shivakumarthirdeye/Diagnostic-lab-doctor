import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, path }) => {
  const { accessToken } = useSelector(state => {
    return state.auth;
  });

  const location = useLocation();

  if (!accessToken) {
    return <Navigate replace to='/auth/login' state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
