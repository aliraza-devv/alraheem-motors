import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import App from './App';

const app = (
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);
