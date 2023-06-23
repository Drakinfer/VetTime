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
import ValidationPage from './pages/ValidationPage';
import FormCabinet from './components/form-infos-cabinet/FormCabinet';
import FaqPage from './components/faq/FaqPage';
import AjouterCreneau from './components/AjouterCreneau/AjouterCreneau';
import AuthContextProvider from './components/Context/AuthContext';

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
    path: "/confirmation",
    element: <ValidationPage />,
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
  {
    path: "/creneau",
    element: <AjouterCreneau />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>

    <div>
      <div className='homeNav'>
        <NavBar />
      </div>
      <RouterProvider router={router} />
    </div>
  </AuthContextProvider>

);
