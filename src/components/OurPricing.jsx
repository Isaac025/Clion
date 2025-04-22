import React from "react";

const PriceCards = ({ bg, h5, h2, p, bt }) => {
  return (
    <div
      className={`${bg} max-w-[600px] w-full h-[318px] flex items-center justify-center`}
    >
      <div className="max-w-[472px] w-full p-2.5">
        <div className="flex gap-[20px] items-center ">
          <div className="max-w-[246px] w-full">
            <h5 className={`${h5}`}>Premium</h5>
            <h2 className={`${h2}`}>$39</h2>
            <p className={`${p}`}>Perfect for Start up (20-100)</p>
          </div>
          <div className={`${p} max-w-[206px] w-full`}>
            <p>Perfect for Start up (20-100)</p>
            <p>Perfect for Start up (20-100)</p>
            <p>Perfect for Start up (20-100)</p>
            <p>Perfect for Start up (20-100)</p>
          </div>
        </div>
        <button className={`${bt} mt-5 mx-auto`}>Purchase</button>
      </div>
    </div>
  );
};

const OurPricing = () => {
  return (
    <div className="layout mt-[10px]">
      <div className="max-w-[610px] w-full text-center mx-auto mb-[30px]">
        <h1 className="font-[500] text-[20px] md:text-[45px] text-[#0c0c0c] ">
          Our pricing
        </h1>
        <p className="font-[400] text-[#363636] text-[15px] md:text-[22px] ">
          Our transparent pricing for all. No setup fee
        </p>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row gap-4 ">
        <PriceCards
          bg={"bg-[#0c0c0c]"}
          h5={"font-[700] text-[10px] md:text-[16px] text-[#E5E5E5]"}
          h2={"text-[#ffffff] text-[25px] md:text-[38px] capitalize font-[500]"}
          p={"font-[500] text-[10px] md:text-[16px] text-[#E5E5E5]"}
          bt={
            "bg-[#FFFFFF] w-full h-[44px] p-[10px] text-[#0c0c0c] font-500 text-[18px] "
          }
        />
        <PriceCards
          bg={"bg-[#f6f6f6]"}
          h5={"font-[700] text-[10px] md:text-[16px] text-[#0c0c0c]"}
          h2={"text-[#0c0c0c] text-[25px] md:text-[38px] capitalize font-[500]"}
          p={"font-[500] text-[10px] md:text-[16px] text-[#666666]"}
          bt={
            " w-full h-[44px] p-[10px] text-[#0c0c0c] font-500 text-[18px] border border-[#0C0C0C] "
          }
        />
      </div>
    </div>
  );
};

export default OurPricing;
