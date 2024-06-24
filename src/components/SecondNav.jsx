import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaSearch, FaHeart } from "react-icons/fa";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";

function SecondNav() {
  return (
    <>
      <nav className=" bg-slate-500 border-gray-200 dark:bg-gray-900 ">
        <div className=" bg-white md:bg-transparent  w-full  flex flex-wrap items-center justify-between mx-auto p-4 border-b-2 border-gray-400 absolute z-10">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full h-10 pr-28 md:block md:w-auto"
            id="navbar-default"
          >
            <ul class="font-extrabold text-sky-400 flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:w-[150%] md:justify-between dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-sky-400  md:bg-transparent  md:hover:text-sky-400 md:pb-6 dark:text-white md:dark:text-blue-500 focus:border-b-2  focus:border-sky-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about-us"
                  className="block py-2 px-3 text-white bg-sky-400  md:bg-transparent md:hover:text-sky-400 md:pb-6 dark:text-white md:dark:text-blue-500 focus:border-b-2  focus:border-sky-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="certifications"
                  className="block py-2 px-3 text-white bg-sky-400  md:bg-transparent md:hover:text-sky-400 md:pb-6 dark:text-white md:dark:text-blue-500 focus:border-b-2  focus:border-sky-400"
                >
                  certifications
                </Link>
              </li>
              <li>
                <Link
                  to="internship"
                  className="block py-2 px-3 text-white bg-sky-400  md:bg-transparent md:hover:text-sky-400 md:pb-6 dark:text-white md:dark:text-blue-500 focus:border-b-2  focus:border-sky-400 "
                >
                  Internship
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden w-full h-full md:block md:w-auto border-l border-gray-400 pl-10">
            <div className="flex w-[100px] justify-between">
              <div className="text-white border rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-400 ease-in-out duration-300 cursor-pointer border-none">
                <FaRegHeart />
              </div>
              <div className="text-white w-10 h-10 flex justify-center items-center hover:bg-blue-700 border-white border-4 ease-in-out duration-300">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative bg-blue-500 h-[100dvh]">
        <img
          className="h-[100dvh] w-[100%]"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] bg-[#042d89] opacity-[50%]"></div>
      </div>
      <div className="absolute z-10 top-1/3 bottom-1/3 left-[10%]  right-[20%]  w-[65rem] h-[70svh] text-center  ">
        <div className="font-bold text-5xl text-white ">
          <h1 className=" mb-10 w-[75%] p-auto m-auto relative text-start">
            Lern the fundamentals with our <p className="ml-20 "> Experts in 
            <span className="text-sky-400 inline-block ml-8   absolute">
              <Typewriter
                options={{
                  strings: ["Programing", "Web Design","Social Skills", "Marketing"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            </p>
          </h1>
          <h1 className="flex justify-center font-semibold text-xl items-center mb-10">
            Utilize Effective Learning to Reach Your Potential
          </h1>
          <label className="relative block w-[27rem] text-center p-auto m-auto mb-10 ">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 text-white hover:text-gray-600 right-0 flex items-center pr-2 w-10 cursor-pointer hover:ease-in-out duration-300 ">
              <FaSearch className="" />
            </span>
            <input
              className="placeholder:italic text-black h-16 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search courses..."
              type="text"
              name="search"
            />
          </label>
          <h6 className="flex justify-center font-medium text-lg items-center">
            Explore our more usefull products <FaHeart className="ml-2" />
          </h6>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="w-[25%]">
            <img
              src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png"
              alt=""
            />
          </div>

          <div className="w-[18%]">
            <img
              src="https://ezitech.org/wp-content/uploads/2023/11/white-ezipos.png"
              alt=""
            />
          </div>

          <div className="w-[28%]">
            <img
              src="https://ezitech.org/wp-content/uploads/2023/10/white-lgooo-01.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondNav;
