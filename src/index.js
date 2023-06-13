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
    element: <BackOfficeVeto />,
    errorElement: <ErrorPage />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
