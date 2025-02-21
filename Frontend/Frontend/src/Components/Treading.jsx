import React from 'react'
import {Link} from "react-router-dom"
import { CiSearch } from "react-icons/ci";

const Treading = () => {
  return (
    <div className='md:mt-[5rem]'>
        <h1 className='text-red-500 text-4xl ml-[3rem]  md:ml-[9rem] mt-[4rem] md:mt-[5rem]'>See what’s trending</h1>
        <div className="ml-[3rem]  md:ml-[9rem] mt-[4rem] md:mt-[5rem]">
            <Link to="">
            <button><CiSearch /></button></Link>
        </div>
    </div>
  )
}

export default Treading