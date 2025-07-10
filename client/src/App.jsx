import React from 'react'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import Courses from './pages/student/Courses'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:
        <>
        <HeroSection />
        <Courses />
        </>
        
      },
    {
      path:"/login",
      element:<Login />
    }]
  }
])


function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App