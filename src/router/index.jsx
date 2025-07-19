import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Pages


import Welcome from '../pages/Welcome';

import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
