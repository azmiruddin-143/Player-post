import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import AllPost from './Components/AllPost';
import Users from './Components/Users';
import UpdatePost from './Components/UpdatePost';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import AuthProvider from './Components/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/createpost",
        element: <CreatePost></CreatePost>,
      },
      {
        path: "/allpost",
        element: <AllPost></AllPost>,
        loader: () => fetch('http://localhost:5000/players')
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create",
        element: <CreateAccount></CreateAccount>,
      },
      {
        path: "/Update/:id",
        element: <UpdatePost></UpdatePost>,
        loader: ({ params }) => fetch(`http://localhost:5000/players/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthProvider>
)
