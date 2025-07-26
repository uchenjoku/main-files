import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Pages

import Welcome from '../pages/Welcome';
import NotFound from '../pages/NotFound';
import Qr from '../pages/Qr/Index';
import Generate from '../pages/Qr/generate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
   {
    path: "/generate",
    element: <Generate />,
  },
  {
    path: "/qr",
    element: <Qr />,
  }
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
