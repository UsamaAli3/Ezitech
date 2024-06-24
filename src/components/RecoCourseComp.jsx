import React from "react";
import HomeComp2 from "./HomeComp2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function RecoCourseComp() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <div className="font-bold text-4xl pt-16 pb-10 text-gray-700 text-center">
        Recommended Course's
      </div>
      <div className=" flex justify-center">
        <Carousel
          className="w-[70rem]"
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
        >
          <HomeComp2 />

          <HomeComp2
            image="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_.webp"
            tital="Online Arbitrage Mastermind 2.0[Resell Products from Home]"
            duration="3 Months"
            price="34,000"
            course="Amazon"
          />
          <HomeComp2 />
          <HomeComp2
            image="https://ezitech.org/wp-content/uploads/2023/07/photoshop-course.webp"
            tital="Adobe Photoshope Course"
            duration="1 Month"
            price="15,000"
          />
        </Carousel>
      </div>
      {/* <div className="flex justify-center items-center my-4 ">
        <div className="border-2 border-blue-700 text-center  w-8 h-8 cursor-pointer flex justify-center items-center my-4 hover:bg-blue-700">
          <IoIosArrowBack className="text-blue-600" />
        </div>
        <div className="border-2 border-blue-700 text-center  w-8 h-8 cursor-pointer flex justify-center items-center my-4 hover:bg-blue-700">
          <IoIosArrowForward className="text-blue-600" />
        </div>
      </div> */}
    </>
  );
}

export default RecoCourseComp;
