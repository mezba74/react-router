import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Components/RootLayout.jsx'
import Product from './Components/Product.jsx'
import About from './Components/about.jsx'
import Data from "./Components/Data.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Product></Product>
      },
      {
        path: "/products",
        element: <Product></Product>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
  {
    path: "/data",
    element: <Data></Data>,
    loader: () => fetch('data.json')
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
