import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#2e5422]'>
      {/* container */}
      
      <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto px-8'>
        <p className='text-[#c9ba36] font-bold'>Hi, my name is</p>
        <h1 className='font-bold text-[#9b9b9b] text-4xl sm:text-7xl '>Isaac Kivuva</h1>
        <h2 className='font-bold text-[#dadada] text-4xl sm:text-7xl'>I am a Full-Stack Developer.</h2>
        <p className='max-w-[1000px] text-[#eaeee9] py-6'>
        Welcome to my web portfolio! I'm a full-stack developer,specializing in web applications(occasionally designing). Explore my projects to see how I merge design and code to create innovative solutions.
        </p>
        <div>
          <button className='group bg-[#c9ba36] px-4 py-2 flex justify-center items-center font-bold'>
            My Work
            <span className='pl-3 group-hover:rotate-90 duration-300'> <HiArrowNarrowRight /> </span>
          </button>
          
        </div>
      </div>
      

    </div>
  )
}

export default Home