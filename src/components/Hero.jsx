import React from "react";

const Hero = () => {
  return (
    <div className="layout  w-full pb-5 h-[333px] flex items-center lg:items-end mt-18 md:mt-40">
      <div className="max-w-[673px]">
        <h1 className="text-[#ffffff] font-[500] text-2xl md:text-[76px] capitalize ">
          The institute for financial liberation
        </h1>
        <p className="font-[400] text-sm md:text-[22px] text-[#ffffff] mb-5">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
        <button className="text-[#0c0c0c] bg-[#ffffff] w-[133px] h-[47px] px-[23px] py-[14px] font-[600] text-[16px]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
