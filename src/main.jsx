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
import Footer from './Components/Footer.jsx';
import RecipeCard from './Components/RecipeCard.jsx';
import RecipeSection from './Components/RecipeSection.jsx';
import UserProfile from './Components/Routes/UserProfile.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import About from './Components/About.jsx';
import Error from './Components/Routes/Error.jsx';
import Header from './Components/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('https://cookedo-server.vercel.app/recipes'),
        Component: Home
      },
      {
        path: "contact",
        Component: Footer
      },
      {
        path: "navbar",
        loader: () => fetch('https://cookedo-server.vercel.app/users'),
        Component: Header
      },
      {
        path: "add-recipe",
        element: <PrivateRoutes><AddRecipe /></PrivateRoutes>
      },

      {
        path: "recipe/:id",
        Component: RecipeDetails,
        loader: ({ params }) => fetch(`https://cookedo-server.vercel.app/recipes/${params.id}`)
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
        loader: () => fetch('https://cookedo-server.vercel.app/users'),
        Component: Users
      },
      {
        path: "profile",
        loader: () => fetch('https://cookedo-server.vercel.app/users'),
        element: <PrivateRoutes><UserProfile /></PrivateRoutes>
      },
      {
        path: "about",
        Component: About
      },

    ]

  },
  {
    path: "*",
    element: <Error />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
