import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, path }) => {
  let accessToken = 'test';

  const location = useLocation();

  if (!accessToken) {
    return <Navigate replace to='/auth/login' state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
