import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MyPhoto from '../assets/20220101_161409.jpg'
import './Home.css'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-orange-300'>
      {/* Container */}
      <img className='w-48 absolute top-96 rounded-full right-64 phoneMode' src={MyPhoto} alt="Myphoto"/>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-900'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-800'>
          Zakariya Zouazou
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-black py-4 max-w-[700px]'>
          Im a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, Im focused on
          building responsive  web applications I can work full-Stock devloper but I Like front-End MOre.
        </p>
        <div>
          <button className='text-black bg-orange-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-900 hover:border-amber-800 hover:text-blue-100'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
