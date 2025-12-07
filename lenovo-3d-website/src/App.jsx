import React from 'react'
import Header from './Pages/Home/Header'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
