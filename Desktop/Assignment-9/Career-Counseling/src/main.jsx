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
import Register from './Components/Register page/Register';
import Login from './Components/Login Page/Login';
import MyProfile from './Components/My Profile/MyProfile';
import PrivateRouts from './Firebase Setup/Private Router/PrivateRouts';
import ForgetPassword from './Components/Forget Password/ForgetPassword';
import { HelmetProvider } from 'react-helmet-async';



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
        element: <h1>about</h1>
      },
      {
        path: "/service",
        element: <h1>service</h1>
      },
      {
        path: "/details/:id",
        element: <PrivateRouts><Details></Details></PrivateRouts>,
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
        element: <PrivateRouts><MyProfile></MyProfile></PrivateRouts>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>
      }
    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    </HelmetProvider>
  </AuthProvider>
)
