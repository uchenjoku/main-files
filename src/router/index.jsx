import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Pages

import Welcome from '../pages/Welcome';
import NotFound from '../pages/NotFound';
import Generate from '../pages/Qr/generate';
import Qr from '../pages/Qr';

const router = createBrowserRouter([

  {
    path: "/generate",
    element: <Generate />
  },
  {
    path: "/qr",
    element: <Qr/>
  },
  {
    path: "*",
    element: <NotFound />
  },
   {
    path: "/",
    element: <Welcome />
  }
]
);

function Router() {
  return (
    <RouterProvider router={router} future={{
    v7_startTransition: true,
  }} />
  )
}

export default Router;
