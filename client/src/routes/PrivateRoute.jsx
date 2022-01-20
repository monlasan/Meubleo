import { Navigate, Outlet } from 'react-router-dom';

const isAuth = localStorage.getItem('authToken') ? true : false;

function PrivateRoute(isAuth) {
  return isAuth ? <Outlet /> : <Navigate replace to='/' />;
}

export default PrivateRoute;
