import React from 'react';

import './App.css';

import FooterPrincipal from './components/footer';
import AppRouters from './AppRouters';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <link href='./dist/bootstrap/css/bootstrap.min.css' rel="stylesheet" type="text/css" />
      </header>

      <AppRouters />

      <FooterPrincipal />

      <script src="%PUBLIC_URL%/dist/bootstrap/js/bootstrap.min.js"></script>
    </BrowserRouter>
  );
}

export default App;
