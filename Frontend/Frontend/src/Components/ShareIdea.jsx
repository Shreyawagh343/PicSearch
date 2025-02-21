import React from "react";

const ShareIdea = () => {
  return (
    <div className="md:pb-[3rem] pb-[2rem] md:mt-[0rem] -mt-[7rem] md:flex bg-[#dedbd2]">
        <div className="ml-[5rem] md:mt-[7rem] mr-[2rem]">
        <h1 className="text-center text-red-500 mt-[7rem] md:mt-[10rem] pt-[3rem] -ml-[2rem] text-4xl md:text-5xl ">
        Inspire & Be Inspired
        </h1>
        <p className="text-center mt-[1rem] text-2xl md:text-3xl md:w-[40vw] w-[70vw] -ml-[1rem]">
          "Share your creativity, discover new ideas, and turn inspiration into reality!"
        </p>
      </div>
      <div className="md:mt-[5rem] md:flex">
        <img src="https://img.freepik.com/premium-photo/food-photographer-with-camera-working-kitchen_380164-295620.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid" alt=""  className="md:h-[75vh] md:w-[40vw] h-[50vh] w-[80vw] ml-[2.5rem] mb-[3rem]"/>
        <img src="https://img.freepik.com/free-photo/high-angle-woman-doing-creative-journaling_23-2150561840.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid" alt="" className="hidden md:block h-[40vh] w-[10vw]mt-[5rem] static z-1 -ml-[4rem] mt-[12rem]" />
      </div>
    </div>
  );
};

export default ShareIdea;
