import React from 'react'
import logo from "../../public/logo.png"

const Navabar = () => {
  return (
    <>
    <div className="flex justify-between">
            <div className="logo flex">
                <img src={logo} alt="" className='h-20 w-20 mt-3'/>
                <h1 className='-ml-3 mt-9 text-2xl text-red-700'>PicSearch</h1>
                <h1 className='ml-5 mt-9 text-2xl cursor-pointer'>Explore</h1>
            </div>
            <div className="Navbar mr-10">
                <ul className='flex gap-6 mt-7 text-[1.3rem]'>
                    <li className='hover:text-red-500 cursor-pointer hover:underline mt-2'>Home</li>
                    <li className='hover:text-red-500 cursor-pointer hover:underline mt-2'>Bussiness</li>
                    <li className='hover:text-red-500 cursor-pointer hover:underline mt-2'>Blog</li>
                    <li><button className="bg-red-500 text-white  p-1.5 pl-4 pr-4 rounded-md text-xl mt-1">Sign Up</button>
                    </li>
                    <li><button className="bg-red-500 text-white  p-1.5 pl-4 pr-4 rounded-md text-xl mt-1">Log In</button></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navabar