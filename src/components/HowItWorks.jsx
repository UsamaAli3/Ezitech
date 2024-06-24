import React from "react";
import HomeComp from "./HomeComp";
import HowItsWork2 from "./HowItsWork2";

function HowItWorks() {
  return (
    <>
      <div className="font-bold text-4xl pt-16 pb-10 text-gray-700 text-center">
        How it works?
      </div>
      <HowItsWork2 />
      <div className="grid grid-cols-3  md:grid-cols-6 gap-6 place-items-center px-14 py-10">
        <div>
          <HomeComp />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/blockchain-69x69.png"
            name="Block Chain"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/ssss-69x69.png"
            name="Architecture"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/aaaa-69x69.png"
            name="Amazon"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/cccccc-69x69.png"
            name="Cyber Security"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/ffff-69x69.png"
            name="Development"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/www-69x69.png"
            name="Designing"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/vvvv-69x69.png"
            name="Gaming"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/05/aaaaaaaaaaaaaaaaaaaaaa-69x69.png"
            name="IOS & AND"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2022/10/social-media-1-63x63.png"
            name="Marketing"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2023/03/3d-68x68.png"
            name="3D"
          />
        </div>
        <div>
          <HomeComp
            image="https://ezitech.org/wp-content/uploads/2023/03/animation-68x68.png"
            name="Animation"
          />
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
