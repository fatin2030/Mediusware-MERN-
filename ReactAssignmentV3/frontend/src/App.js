import React from 'react'
import './App.css'
import HomeCard from './components/HomeCard'
import NavBar from './components/NavBar'
import Service from './components/Service'
import AboutUs from './components/AboutUs'
import WorkTogether from './components/WorkTogether'
import FeedBacks from './components/FeedBacks'
import Projects from './components/Projects'
import Achievement from './components/Achievement'
import Query from './components/Query'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <div className='relative min-h-screen'>
        <video
          className="absolute  h-full w-screen top-0 left-0  object-cover"
          autoPlay
          loop
          muted
        >
          <source src='HomeCardVideo.mp4' type='video/mp4' />
        </video>
        <div className="">
          <NavBar />
          <HomeCard />
        </div>
      </div>

      <div className=' bg-slate-100'>
        <Service />
      </div>
      <div className=''>
        <AboutUs />
      </div>
      <div className=''>
        <WorkTogether />
      </div>
      <div className=' bg-[#f0f7ff]'>
        <FeedBacks />
      </div>
      <div className='bg-white'>
        <Projects />
      </div>
      <div className=' bg-[#f0f7ff]'>
        <Achievement />
      </div>
      <div className=' bg-white'>
        <Query />
      </div>

    <div className='bg-[#f0f7ff]'>

      <Contact  />

      </div>

      <div>
       <Footer/>
      </div>
    </div>
  )
}

export default App
