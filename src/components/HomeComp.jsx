import React from "react";

function HomeComp({
  image = "https://ezitech.org/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png",
  name = "ML & AI",
}) {
  return (
    <>
      <div className="w-[10rem] h-[10rem] rounded-xl bg-white flex flex-col justify-center items-center gap-y-4 hover:-translate-y-6 ease-in-out duration-300 shadow-xl">
        <div>
          <img src={image} alt="" />
        </div>
        <div>{name}</div>
      </div>
    </>
  );
}

export default HomeComp;
