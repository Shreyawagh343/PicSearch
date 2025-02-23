import React from 'react'
import { FaGoogle } from "react-icons/fa";

const SigninHome = () => {
  return (
    <div className="flex md:h-[85vh] md:bg-[#f5ebe0]">
      <div className="relative w-1/2 hidden md:block">
        <div className="absolute inset-0 items-center justify-center md:mt-[14rem] md:ml-[14rem]">
          <h1 className="text-center text-red-500 mt-[3rem] md:mt-[2rem] md:w-[30vw] text-4xl md:text-5xl ">
          Join Us & Bring Your Ideas to Life!
          </h1>
          <p className="text-center mt-[1rem] text-[1.3rem] md:text-[1.4rem] md:w-[30vw]">Sign up today to save, share, and explore endless inspiration tailored just for you!</p>
        </div>
      </div>

      {/* Sign-in Form */}
      <div className="w-full md:w-[30vw] bg-white p-8 shadow-lg rounded-lg md:ml-[4rem] md:h-[80vh] mt-[1rem]">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Welcome to PicSearch
        </h2>
        <p className="text-center text-gray-600 mt-2">Find new ideas to try</p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Create a password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="date"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-red-600"
          >
            Continue
          </button>

          <div className="text-center text-gray-600">OR</div>

          <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-lg hover:bg-gray-100">
          <FaGoogle />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already a member? <a href="#" className="text-red-500 font-semibold">Log in</a>
        </p>
      </div>
    </div>
   
  )
}

export default SigninHome