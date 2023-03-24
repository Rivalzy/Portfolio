import React from "react";

import ManImg from "../../assets/img/Man.png";

function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* side kiri */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-xl text-white mb-[22px]">
              Hi, I'm <span className="text-accent">Rival</span>
            </p>
            <h1 className="text-3xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
          </div>
          {/* side kanan */}
          <div className="hidden lg:flex justify-end items-end h-full">
            <img src={ManImg} alt="" className="w-[700px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
