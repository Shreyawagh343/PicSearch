import React from 'react'
import { Link } from 'react-router-dom'

const Ideas = () => {
  return (
    <> 
    <div className="flex  flex-col ml-[10rem] mt-[5rem]">
      <h1 className='text-4xl capitalize text-black'>Explore images that ignite <span className='text-red-600'>your creativity</span></h1>
        <div className="flex">
          <div className="">
            <img src="" alt="" />
            <Link to="/Outfit">OutFit</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Ideas