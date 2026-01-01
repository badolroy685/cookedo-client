import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddRecipe from './Components/AddRecipe.jsx';
import UpdateRecipe from './Components/UpdateRecipe.jsx';
import RecipeDetails from './Components/RecipeDetails.jsx';
import Signup from './Components/layouts/Signup.jsx';
import Signin from './Components/layouts/Signin.jsx';
import AuthProvider from './Components/context/AuthProvider.jsx';
import Users from './Components/Users.jsx';

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
        path: "recipe/:id",
        Component: RecipeDetails,
        loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      },
      {
        path: "updateRecipe/:id",
        Component: UpdateRecipe
      },
      {
        path: "signup",
        Component: Signup
      },
      {
        path: "signin",
        Component: Signin
      },
      {
        path: "users",
        loader: () => fetch('http://localhost:5000/users'),
        Component: Users
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
