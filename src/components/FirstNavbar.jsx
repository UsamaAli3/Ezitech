import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import {
  FaBehance,
  FaLinkedinIn,
  FaYoutube,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function FirstNavbar() {
  return (
    <>
      <div className="flex text-[0.75rem] bg-blue-500  w-full justify-evenly h-[100px] items-center text-white  sm:h-12 ">
        <div className="flex">
          <span className="flex items-center ml-[33px]">
            <FaPhone className="text-white mr-2 text-[0.84rem]" />
            +923455555396
          </span>
          <span className="flex items-center  ml-[33px]">
            <FaMapMarkerAlt className="text-white mr-2 text-[0.84rem]" />
            Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
          </span>
          <span className="flex items-center  ml-[33px]">
            <FaRegClock className="text-white mr-2 text-[0.84rem]" />
            Mon - Fri 8.00 - 20.00
          </span>
        </div>
        <span>
          <ul className="flex items-center w-[150px] justify-evenly ">
            <li>
              <Link to="https://flowbite.com/docs/getting-started/react/">
                <CiFacebook className="text-white text-[0.84rem]" />
              </Link>
            </li>
            <li>
              <Link to="https://flowbite.com/docs/getting-started/react/">
                <FaInstagram className="text-white text-[0.84rem]" />
              </Link>
            </li>
            <li>
              <Link to="https://flowbite.com/docs/getting-started/react/">
                <FaBehance className="text-white text-[0.84rem]" />
              </Link>
            </li>
            <li>
              <Link to="https://flowbite.com/docs/getting-started/react/">
                <FaLinkedinIn className="text-white text-[0.84rem]" />
              </Link>
            </li>
            <li>
              <Link to="https//:youtube.com">
                <FaYoutube className="text-white text-[0.84rem]" />
              </Link>
            </li>
          </ul>
        </span>
        <span className="flex items-center">
          <FaUser className="text-white mr-3 text-[0.84rem]" />
          <h6 className="text-white mr-2">Login</h6>
          <h6 className="text-white border-l-2 pl-2">Regester</h6>
        </span>
      </div>
    </>
  );
}

export default FirstNavbar;
