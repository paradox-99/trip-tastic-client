import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes';
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProv from './provider/AuthProv';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProv>
      <HelmetProvider>
        <Helmet>
          <title>TripTastic</title>
        </Helmet>
        <RouterProvider router={Routes}></RouterProvider>
        <Toaster />
      </HelmetProvider>
    </AuthProv>
  </React.StrictMode>,
)
