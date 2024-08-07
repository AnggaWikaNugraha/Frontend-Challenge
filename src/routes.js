import React from 'react';
import SignUp from './pages/register';
import SignIn from './pages/login';
import Home from './pages/home';


/**
 * @var ROUTERS adalah variable router aplikasi
 */
const ROUTERS = [
  {
    path: '/',
    Component: Home,
    exact: true,
    isPrivate: false,
  },
  
];

export default ROUTERS;
