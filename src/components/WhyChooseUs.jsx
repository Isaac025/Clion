import React from "react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";

const WhyChooseUs = () => {
  return (
    <div className="layout mt-[10px]">
      <div className="max-w-[610px] w-full mx-auto">
        <h1 className="text-[#0c0c0c] text-center capitalize font-[500] text-[22px] md:text-[45px]">
          Why choose us
        </h1>
        <p className="font-[400]  text-[16px] md:text-[22px] text-[#363636] text-center">
          Empower yourself with expert insights, practical strategies, and the
          tools to take control of your financial future.
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-8">
        <div className="container flex-col">
          <div className="divcontainer">
            <h1 className="heading">High Startup Success Rate</h1>
            <p className="divpara">
              Startups we support have a
              <span style={{ fontWeight: 700 }}>70% success rate</span> after
              three years, compared to the global average of 50%. Our financial
              strategies and tailored funding solutions help businesses survive
              and thrive in competitive markets.
            </p>
          </div>
          <img src={frame1} alt="frame1" />
        </div>
        <div className="container flex-col-reverse">
          <img src={frame2} alt="frame2" />
          <div className="divcontainer">
            <h1 className="heading">Expert Financial Guidance</h1>
            <p className="divpara">
              Our team includes financial experts with{" "}
              <span style={{ fontWeight: 700 }}>10+ years of experience,</span>
              providing hands-on advisory to help startups optimize their
              revenue streams, manage cash flow, and increase profitability by
              an <span style={{ fontWeight: 700 }}>average of 30%</span> within
              the first year
            </p>
          </div>
        </div>

        <div className="container flex-col">
          <div className="divcontainer">
            <h1 className="heading">Fast & Flexible Funding</h1>
            <p className="divpara">
              Clion offers loan approvals in as little as 48 hours, with
              flexible repayment plans that adapt to business growth. Unlike
              traditional banks, we prioritize accessibility and efficiency,
              ensuring startups get the capital they need when they need it.
            </p>
          </div>
          <img src={frame3} alt="frame3" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
