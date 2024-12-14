import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
//import NavBar from './Components/NavBar/NavBar.jsx'



const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
])


function Main() {

  return (
    <RouterProvider router={router} />
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)