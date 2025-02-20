import React from 'react'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div>
        <h1 className='text-5xl  mt-[3rem] md:mt-[6rem] text-center'>Discover, Save, and <span className='text-red-500 text-5xl'>Share Your Inspiration</span></h1>
        <p className=' text-[1.3rem] md:text-2xl text-center mt-[1.5rem] md:ml-[6rem] md:mr-[6rem] ml-[2rem] mr-[2rem]'>Discover and organize ideas effortlessly with our visual bookmarking platform. From fashion to travel, curate your favorite images, create mood boards, and get inspired <span className='text-red-500'> all in one place. Start exploring today!</span></p>
        <div className="mx-[44rem] my-[2rem] ">
        <Button variant="outlined" color="error">
        Explore
      </Button>
      </div>

    </div>
  )
}

export default Hero