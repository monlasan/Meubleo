import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  return localStorage.getItem('authToken') ? (
    <Outlet />
  ) : (
    <Navigate replace to='/' />
  );
}

export default PrivateRoute;
