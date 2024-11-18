import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Components/Main Root/MainRoot';
import Home from './Components/Home Pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <h1 className='text-red-700 text-5xl'>Error 404</h1>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader : () => fetch("/Career.json")
      },

      {
        path:"/about",
        element : <h1>My Profile</h1>
      },
      {
        path:"/service",
        element : <h1>My Profile</h1>
      },
      {
        path:"/cource",
        element : <h1>My Profile</h1>
      },
      {
        path:"/myprofile",
        element : <h1>My Profile</h1>
      }
    ]

  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
