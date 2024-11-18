import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Components/Main Root/MainRoot';
import Home from './Components/Home Pages/Home';
import Details from './Components/Details Page/Details';
import AuthProvider from './Components/Auth Provider setup/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <h1 className='text-red-700 text-5xl'>Error 404</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Career.json")
      },

      {
        path: "/about",
        element: <h1>My Profile</h1>
      },
      {
        path: "/service",
        element: <h1>My Profile</h1>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const pev = await fetch("/Career.json")
          const data = await pev.json()
          const dataChek = data.find(d => d.id == params.id)
          return dataChek
        }
      },
      {
        path: "/cource",
        element: <h1>My Profile</h1>
      },
      {
        path: "/myprofile",
        element: <h1>My Profile</h1>
      },
      {
        path: "/register",
        element: <h1>register</h1>
      },
      {
        path: "/login",
        element: <h1>My Profile</h1>
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
