import React from "react";
import shape1 from "../assets/flower.png";
import shape2 from "../assets/fluentShape.png";
import shape3 from "../assets/spiral.png";
import shape4 from "../assets/hugeicons.png";

const financeCards = [
  {
    shape: shape1,
    heading: "Startup Loans & Grants",
    message: "Flexible funding solutions to kickstart or expand businesses.",
  },
  {
    shape: shape2,
    heading: "Financial Advisory",
    message: "Expert guidance on cash flow management and budgeting",
  },
  {
    shape: shape3,
    heading: "Revenue Growth Program",
    message:
      "Tools and mentorship to optimize profitability and sustainability.",
  },
  {
    shape: shape4,
    heading: "Investment Matching",
    message:
      "Connecting startups with potential investors and venture capitalists.",
  },
];

const Finance = () => {
  return (
    <div className="layout mt-[10px]">
      <div className="max-w-[707px] w-full mx-auto">
        <h1 className=" font-[500] text-[22px] text-center capitalize md:text-[45px] text-[#0c0c0c]">
          Creating efficient financial growth
        </h1>
        <p className="font-[400] text-[15px] text-[#363636] md:text-[22px] text-center">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap items-center gap-4 mt-[40px] md:justify-center lg:justify-start">
        {financeCards.map((card, i) => {
          const { shape, heading, message } = card;
          return (
            <div
              key={i}
              className="w-[295px] h-[320px] border border-[#D9D9D9] bg-[#ffffff] p-3"
            >
              <img src={shape} alt={heading} />
              <div className="w-[261px] mt-[140px]">
                <h2 className="font-[500] text-[22px] text-[#0c0c0c] mb-[8px] ">
                  {heading}
                </h2>
                <p className="text-[#363636] text-[16px] font-[400]">
                  {message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Finance;
