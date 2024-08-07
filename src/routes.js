import React from 'react';
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
