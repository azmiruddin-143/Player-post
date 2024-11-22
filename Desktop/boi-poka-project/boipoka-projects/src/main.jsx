import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import DetailsBooks from './Components/Daitls/DetailsBooks';
import Listed from './Components/Listed Books/Listed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"books/:bookId",
        element: <DetailsBooks></DetailsBooks>,
        loader: () => fetch("/Books.json")
      },
      {
        path:"listedbooks",
        element: <Listed></Listed>,
        loader: () => fetch("/Books.json")
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
