import { Navigate, Outlet } from 'react-router-dom';

function NotLogged(logged) {
  return localStorage.getItem('authToken') ? (
    <Navigate replace to='/' />
  ) : (
    <Outlet />
  );
}

export default NotLogged;
