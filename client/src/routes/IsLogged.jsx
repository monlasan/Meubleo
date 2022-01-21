import { Navigate, Outlet } from 'react-router-dom';

const logged = localStorage.getItem('authToken') ? true : false;

function NotLogged(isLogged) {
  return logged ? <Navigate replace to='/' /> : <Outlet />;
}

export default NotLogged;
