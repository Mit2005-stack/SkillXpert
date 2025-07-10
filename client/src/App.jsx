import React from 'react'
import Navbar from './components/ui/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import Courses from './pages/student/Courses'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { Router } from 'lucide-react'

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
      <Router router={appRouter} />
    </main>
  )
}

export default App