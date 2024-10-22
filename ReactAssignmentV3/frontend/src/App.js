import React from 'react'
import './App.css'
import HomeCard from './components/HomeCard'
import NavBar from './components/NavBar'
const App = () => {
  return (
 
<div className='relative min-h-screen'>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls
      >
        <source src='HomeCardVideo.mp4' type='video/mp4' />
      </video>
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <NavBar />
        <HomeCard />
      </div>
    </div>

    
  )
}

export default App
