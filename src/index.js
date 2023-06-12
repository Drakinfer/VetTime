import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import NavBar from './components/nav/nav';
import Login from './components/login/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <BackOfficeVeto />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className='homeNav'>
        <NavBar />
      </div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
