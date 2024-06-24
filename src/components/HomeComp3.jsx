import React from "react";
import { FaLocationArrow, FaShoppingBag } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";

function HomeComp3({
  image = "https://ezitech.org/wp-content/uploads/2024/02/digital-marketing-511x511.png",
  tital = "DIGITAL MARKETING",
  className = "",
}) {
  return (
    <>
      <div className="border-2 w-[337.5px] rounded-xl shadow-xl mb-10 hover:scale-105">
        <div className="flex rounded-t-xl justify-around items-center h-[150.73px] text-white bg-blue-600 mb-10 ">
          <div>
            <h1 className={`font-bold w-[134.83px] h-[58px] text-2xl mt-8 ${className}`} >
              {tital}
            </h1>
            <p className="border-t-2 my-4  pt-2 border-gray-400 w-32">
              Ezitech Institute
            </p>
          </div>
          <div>
            <img className="w-[63.86px] h-[63.86px]" src={image} alt="" />
          </div>
        </div>
        <div className="h-[312px] text-base">
          <div>
            <div className="flex gap-6 ml-2 mt-4 items-center">
              <div className="">
                <div className="text-[#042D89] border m-auto p-auto rounded-full w-10 h-10 flex justify-center items-center bg-gray-100 border-none ">
                  <IoIosPerson className="text-2xl" />
                </div>
                <p className="p-2 ">Employment -</p>
              </div>
              <div>
                <p className="w-16 text-center bg-gray-200 rounded-xl">
                  Hybrid
                </p>
              </div>
            </div>
            <div className="flex gap-6 ml-2 mt-4 items-center">
              <div className="">
                <div className="text-[#042D89] border m-auto p-auto rounded-full w-10 h-10 flex justify-center items-center bg-gray-100 border-none ">
                  <FaLocationArrow />
                </div>
                <p className="p-2 ">Location -</p>
              </div>
              <div>
                <p className="w-24 text-center bg-gray-200 rounded-xl">
                  Rawalpindi
                </p>
              </div>
            </div>
            <div className="flex gap-6 ml-2 mt-4 items-center">
              <div className="">
                <div className="text-[#042D89] border m-auto p-auto rounded-full w-10 h-10 flex justify-center items-center bg-gray-100 border-none ">
                  <FaShoppingBag />
                </div>
                <p className="p-2 ">Job Type -</p>
              </div>
              <div className="flex gap-6">
                <p className="w-20 text-center bg-gray-200 rounded-xl text-nowrap ">
                  Full Time
                </p>
                <p className="w-20 text-center bg-gray-200 rounded-xl text-nowrap">
                  Part Time
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[39px] text-center mb-[12px]">
          <button className="bg-blue-600 hover:bg-blue-700 rounded-md text-white  h-[39px] w-36">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeComp3;
