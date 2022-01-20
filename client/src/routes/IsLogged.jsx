import { Navigate, Outlet } from 'react-router-dom';

const isLogged = localStorage.getItem('authToken') ? true : false;

function IsLogged(isLogged) {
  return isLogged ? <Navigate replace to='/' /> : <Outlet />;
}

export default IsLogged;
