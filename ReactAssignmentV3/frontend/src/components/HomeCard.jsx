import React from 'react'
import NavBar from './NavBar'

const HomeCard = () => {
  return (
    <>
      <div className="">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          controls
        >
          <source src='HomeCardVideo.mp4' type='video/mp4' />
        </video> */}
        <div className="absolute inset-0 z-10">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-8xl font-bold text-white text-center">
              Transforming Your Ideas <br /> into <span className="text-[#2EB8A2]">Digital Outcomes</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
