import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from './Header'
import { Footer } from './Footer'
import { PlantsPage } from './PlantsPage'
import { UsersPage } from './UsersPage'
import './App.css'

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PlantsPage />
      },
      {
        path: "/users",
        element: <UsersPage />
      }
    ]
  }
])

function App() {

  return (
  <RouterProvider router={router} />
  );
}

export default App
