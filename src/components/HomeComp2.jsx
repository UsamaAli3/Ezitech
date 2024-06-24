import React from "react";
import { IoMdTime } from "react-icons/io";

function HomeComp2({
  image = "https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-jpg.webp",
  course = "Designing",
  tital = "Adobe Illistator Course with projects",
  price = "PKR35,000",
  duration = "3 Months",
}) {
  return (
    <>
      <div class="max-w-sm  bg-white border  shadow-lg  overflow-hidden  dark:bg-gray-800 dark:border-gray-700 rounded-xl w-[261px] h-[290px]z-10 2 ">
        <a href="#">
          <img
            class="rounded-t-lg hover:scale-110 duration-300 ease-in-out  "
            src={image}
            alt=""
          />
        </a>
        <div class="p-5 w-full">
          <a href="#">
            <h5 class="mb-3 font-normal text-gray-700 dark:text-gray-400 z-10">
              {course}
            </h5>
          </a>
          <p class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {tital}
          </p>
        </div>
        <div className="border-t-2 border-gray-400 flex justify-between h-16 items-center mx-4">
          <div className="flex justify-start items-center ">
            <IoMdTime className="mr-2" />
            {duration}
          </div>
          <div>{price}</div>
        </div>
      </div>
    </>
  );
}

export default HomeComp2;
