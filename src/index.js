import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/global.scss';
import './styles/vars.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="eyeofhoruslot.com_react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
