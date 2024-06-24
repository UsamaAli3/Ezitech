import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <footer>
        <div className=" w-[100dhv] bg-gradient-to-r from-blue-800 to-indigo-900">
          <h1 className=" w-[26.2rem] py-7 font-bold text-[2.5rem] text-white m-auto p-auto text-center">
            It’s time to <span className="text-[#4F78F8]">start </span>{" "}
            investing in yourself
          </h1>
          <div>
            <img
              src="https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy-1438x554.webp"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#042d89] text-white flex w-full pl-6 text-sm">
          <div className="  w-1/4  pl-20 pr-4 py-16 leading-relaxed ">
            <h1 className="font-bold text-[18px] pb-5">About</h1>
            <p>
              Ezitech Institute provides a platform for newcomers to launch
              their IT and freelancing careers. Our emphasis on practical
              information technology courses that are career and work oriented
              makes us the top computer institute in Rawalpindi, Islamabad,
              Pakistan.
            </p>
          </div>
          <div className="   w-1/4 py-20  ">
            <h1 className="font-bold text-[18px] text-center pb-5 ">
              POPULAR COURSES
            </h1>
            <div className=" px-16">
              <Link
                to="#"
                className="  flex hover:underline hover:text-blue-400 font-bold"
              >
                <div className="mr-5">
                  <img
                    src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-75x75.webp"
                    alt=""
                  />
                </div>
                <div>
                  <p>Online Arbitrage Mastermind 2.0 [R...</p>
                  <span className="text-gray-400 text-sm">By Husnain Ali </span>
                </div>
              </Link>
              <Link
                to="#"
                className=" flex hover:underline hover:text-blue-400 font-bold"
              >
                <div className="mr-5">
                  <img
                    src="https://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-_FILEminimizer_-75x75.webp"
                    alt=""
                  />
                </div>
                <div>
                  <p>The Complete Bootcamp 2022: Node.j...</p>
                  <span className="text-gray-400 text-sm">By Ezitech</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="  w-1/4 py-20">
            <h1 className="font-bold text-[18px] pb-3">PAGES</h1>
            <ul className="list-disc">
              <li className="hover:text-blue-400">
                <Link to="#">BLOG</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link to="#">EZICODING</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link to="#">INTERNSHIP</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link to="#">OUR SERVICES</Link>
              </li>
            </ul>
          </div>
          <div className="  w-1/4 py-20 ">
            <h1 className="font-bold text-[18px] pb-5">CONTACT</h1>
            <ul >
              <li className="flex  items-center">
                <FaLocationDot className="mr-2 text-xl "/>
                <Link className="w-[266px]" to="#">
                  Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                  Punjab 46000
                </Link>
              </li>
              <li className="flex  items-center">
                <IoCall className="mr-2 text-xl my-2"/>
                <Link to="#">+923455555396</Link>
              </li>
              <li className="flex  items-center">
                <MdEmail className="mr-2 text-xl"/>
                <Link to="#">info@ezitech.org</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="text-white bg-[#042d89] h-16 flex items-center justify-center">
        <p className="text-center">
          Copyright © 2024 Ezitech Institute | Design & Develop by{" "}
          <Link to="/" className="hover:text-blue-400 underline">
            Eziline Software House
          </Link>
        </p>
      </footer>
    </>
  );
}
