import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Pages

import Welcome from '../pages/Welcome';
import NotFound from '../pages/NotFound';
import Qr from '../pages/Qr';
import Generate from '../pages/Qr/generate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
   {
    path: "/generate",
    element: <Generate />,
  },
  {
    path: "/qr",
    element: <Qr />,
  },
    {
    path: "*",
    element: <NotFound />,
  }
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
