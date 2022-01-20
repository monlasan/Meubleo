import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Register from './views/Register/RegisterPage';
import Login from './views/Login/LoginPage';
import Profile from './views/Profile/ProfilePage';
import ProductDetail from './views/ProductDetail/ProductDetailPage';
import Cart from './views/Cart/CartPage';

import PrivateRoute from './routes/PrivateRoute';
import NotLogged from './routes/IsLogged';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route element={<NotLogged />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/product' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
