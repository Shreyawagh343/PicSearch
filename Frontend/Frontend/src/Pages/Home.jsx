import React from 'react'
import Navbar from '../Components/Navbar'
import Image from '../Components/Image'
import Hero from '../Components/Hero'
import ShareIdea from '../Components/ShareIdea'
import SigninHome from '../Components/SigninHome'
import Footer from '../Components/Footer'
import SaveHome from '../Components/SaveHome'


const Home = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto overflow-x-hidden mt-16 overflow-y-hidden'>
        <Navbar />
        <Hero />
        <Image />
        <SaveHome />
        <ShareIdea />
        <SigninHome />
      </div>
        <Footer />
    </>
  );
}

export default Home