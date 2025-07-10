import React from 'react'
import Navbar from './components/ui/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import Courses from './pages/student/Courses'

function App() {
  return (
    <>
      
    <Navbar />
    <HeroSection/>
    <Courses/>
    <Login />
    </>
  )
}

export default App