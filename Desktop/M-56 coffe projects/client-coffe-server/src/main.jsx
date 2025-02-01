import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import AddCoffe from './AddCoffe';
import Coffes from './Coffes';
import Update from './Update';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/addcoffe",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/coffes",
        element: <Coffes></Coffes>,
        loader: () => fetch("http://localhost:5000/coffes")
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffes/${params.id}`)
      },

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
