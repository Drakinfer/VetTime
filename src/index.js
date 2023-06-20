import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/nav/nav';
import Login from './components/login/Login';
import HomePage from './pages/HomePage';
import CabinetFoundPage from './pages/CabinetFoundPage';
import FormCabinet from './components/form-infos-cabinet/FormCabinet';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path : "/veto",
    element : <FormCabinet/>,
  },
  {
    path : "/cabinets",
    element : <CabinetFoundPage/>,
  }
  // {
  //   path: "/rdv",
  //   element: <RendezVousVeto />,
  // },
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
