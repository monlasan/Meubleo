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
import Dashboard from './views/Dashboard/DashboardPage';

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
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route
          path='*'
          element={
            <div className='w-full text-center min-h-screen bg-gray-100 grid place-items-center'>
              <div>
                <h1 className='text-4xl'>
                  ERROR <span className='text-indigo-800'>404</span>
                </h1>
                <br />
                <p className='text-indigo-800'>Il n'y a rien ici :P</p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
