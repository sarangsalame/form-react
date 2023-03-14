import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
