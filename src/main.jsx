import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes';
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>TripTastic</title>
        </Helmet>
        <RouterProvider router={Routes}></RouterProvider>
      </HelmetProvider>
  </React.StrictMode>,
)
