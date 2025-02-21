import React from "react";

const SaveIdea = () => {
  return (
    <div className="md:flex pb-[3rem] md:p-[2rem] pt-[1rem] mt-[3rem] md:mt-[5rem] bg-[#f5ebe0]">
      <div className=" mt-[2rem] md:mt-[8rem] md:flex mb-[2rem]">
        <div className="bg-[url(https://img.freepik.com/premium-photo/dream-catcher-gray-background_110491-1561.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover ml-[1.8rem] h-[30vh] w-[85vw] md:h-[40vh] md:w-[30vw] md:rounded-[3rem] md:mt-[8rem] md:ml-[2rem]"></div>
        <div className="hidden md:block bg-[url(https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811473.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover h-[60vh] w-[20vw] rounded-[3rem] -ml-[19rem] static z-30"></div>
        <div className="hidden md:block bg-[url(https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom-with-shelf_105762-2074.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover h-[35vh] w-[20vw] rounded-[3rem] -ml-[7rem] -mt-[4rem]"></div>
        <div className="hidden md:block bg-[url(https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024953.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover h-[35vh] w-[20vw] rounded-[3rem] -ml-[20rem] mt-[14rem]"></div>
      </div>
      <div className="ml-[3rem] md:mt-[12rem] mr-[2rem]">
        <h1 className="text-center text-red-500 mt-[3rem] md:mt-[5rem]  text-4xl md:text-5xl ">
          Save ideas you like
        </h1>
        <p className="text-center mt-[1rem] text-2xl md:text-3xl">"Looking for new ideas? Try searching for ‘creative ideas for home decor’ and see what sparks your interest!" </p>
        </div>
    </div>
  );
};

export default SaveIdea;
