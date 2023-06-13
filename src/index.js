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
import BackOfficeVeto from './components/backOfficeVeto/backOfficeVeto'


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
  {
    path: "/rdv",
    element: <RendezVousVeto />,
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
