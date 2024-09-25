import React, { useState } from 'react';
import Hero from '@/Components/Hero';
import HomeProjects from '@/Components/HomeProjects';
import About from '@/Components/About';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Hero/>
        <div className='relative z-[30]'>
          <HomeProjects/>
        </div>
        <div className='relative z-[30]'>
          <About/>
        </div>
      </div>
    </div>
  );
}; 

export default HomePage;