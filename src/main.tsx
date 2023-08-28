import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import RootPage from "@/pages/root"
import ErrorPage from "@/404.tsx"
import OpenAIPage from "@/pages/openai.tsx"

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/openai',
    element: <OpenAIPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
