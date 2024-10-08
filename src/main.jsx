import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import HomePage from './pages/home/HomePage';
import Login from './pages/login-registration/Login';
import Register from './pages/login-registration/Register';
import AuthProvider from './auth/AuthProvider';
import { Toaster } from 'react-hot-toast';
import ProductList from './pages/home/Products';
import Bookmark from './pages/bookmark/Bookmark';
import PrivateRoute from './auth/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <PrivateRoute><ProductList /></PrivateRoute>
      },
      {
        path: '/bookmarks',
        element: <PrivateRoute><Bookmark /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </StrictMode>,
)
