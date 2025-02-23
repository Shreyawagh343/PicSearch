import React from 'react'
import Navabar from '../Components/Navabar'
import Image from '../Components/Image'
import Hero from '../Components/Hero'
import ShareIdea from '../Components/ShareIdea'
import SigninHome from '../Components/SigninHome'
import Footer from '../Components/Footer'
import SaveHome from '../Components/SaveHome'


const Home = () => {
  return (
    <>
    <Navabar/>
    <Hero/>
    <Image/>
    <SaveHome/>
    <ShareIdea/>
    <SigninHome/>
    <Footer/>
    </>
  )
}

export default Home