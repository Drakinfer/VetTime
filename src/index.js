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
import RendezVousVeto from './components/RendezVousVeto/rendezVousVeto'
import HomePage from './pages/HomePage';
import CabinetFoundPage from './pages/CabinetFoundPage';
import FormCabinet from './components/form-infos-cabinet/FormCabinet';
import FaqPage from './components/faq/FaqPage';


const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cabinets",
    element: <CabinetFoundPage />,
  },
  {
    path: "/backVeto",
    element: <BackOfficeVeto />,
  },
  {
    path: "/veto",
    element: <FormCabinet />,
  },

  {
    path: "/faq",
    element: <FaqPage />,
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
