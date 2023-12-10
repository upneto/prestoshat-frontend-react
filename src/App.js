import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooterPrincipal from './components/footer';
import AppRouters from './AppRouters';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>     
      <AppRouters />                 
    </BrowserRouter>
  );
}

export default App;
