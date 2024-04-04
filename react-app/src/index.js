import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import {
  createBrowserRouter, Navigate,
  RouterProvider
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import ErrorPage from './shared/components/page-not-found/PageNotFound';
import Dashboard from './pages/dashboard/screen/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'inventory',
        children: [
          {
            path: '',
            element: <Navigate to="inward" replace />
          }
        ]
      },
      {
        path: 'stakeholders',
        children: [
          {
            path: '',
            element: <Navigate to="vendors" replace />
          }
        ]
      },
      {
        path: 'staff',
        children: [
          {
            path: '',
            element: <Navigate to="info" replace />
          }
        ]
      },
      {
        path: 'finances',
        children: [
          {
            path: '',
            element: <Navigate to="expenses" replace />
          }
        ]
      },
      {
        path: '*',
        element: <ErrorPage />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
