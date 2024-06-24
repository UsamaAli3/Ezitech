import React from "react";
import HomeComp3 from "./HomeComp3";
function PerfectIntern() {
  return (
    <>
      <div className="font-bold text-4xl pt-16 pb-10 text-gray-700 text-center">
        Perfect Internship's For You
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        <div>
          <HomeComp3 className=" w-[150.83px]"
            image="https://ezitech.org/wp-content/uploads/2024/02/web-design-511x511.png"
            tital="HTML & CSS Javascript"
            
          />
        </div>
        <div>
          <HomeComp3
            image="https://ezitech.org/wp-content/uploads/2024/02/development-511x511.png"
            tital="GRAPHIC DESIGNING"
            className="grow"
          />
        </div>
        <div>
          <HomeComp3 className="grow" />
        </div>
        <div>
          <HomeComp3
            image="https://ezitech.org/wp-content/uploads/2024/02/app-development-511x511.png"
            tital="FLUTTER Development"
            className="grow"
          />
        </div>
        <div>
          <HomeComp3
            image="https://ezitech.org/wp-content/uploads/2024/02/web-services-511x511.png"
            tital="MACHINE LEARNING"
            className="grow"
          />
        </div>
        <div>
          <HomeComp3
            image="https://ezitech.org/wp-content/uploads/2024/02/clean-code-511x511.png"
            tital="MERN Development"
            className="grow"
          />
        </div>
      </div>
      <div className="h-[39px] text-center mb-[22px] ">
        <button className="bg-blue-600 hover:bg-blue-700 rounded-md text-white  h-[39px] w-36">
          Learn More
        </button>
      </div>
    </>
  );
}

export default PerfectIntern;
