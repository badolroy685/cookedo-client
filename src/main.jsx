import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddRecipe from './Components/AddRecipe.jsx';
import UpdateRecipe from './Components/UpdateRecipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        loader: () => fetch('http://localhost:5000/recipes'),
        Component: Home
      },
      {
        path: "add-recipe",
        Component: AddRecipe
      },
      {
        path: "updateRecipe",
        Component: UpdateRecipe
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
