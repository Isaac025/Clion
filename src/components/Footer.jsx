import React from "react";
import logo1 from "../assets/Vector.png";
import logo2 from "../assets/Vector2.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.png";
import before from "../assets/before.png";

const finances = [
  "Loans and Grants",
  "Financial advisory",
  "Revenue growth program",
  "Investment matching",
];

const links = [
  { link: "About us", to: "#" },
  { link: "Projects", to: "#" },
  { link: "News", to: "#" },
  { link: "Partners", to: "#" },
  { link: "Contacts", to: "#" },
];

const Footer = () => {
  return (
    <div className="bg-[#0c0c0c] mt-[10px] pt-6  px-4 h-screen max-h-[453px]">
      <div className="layout">
        <div className="flex flex-col md:flex-row items-start gap-5 mb-[15px] justify-between">
          <div className="flex gap-2.5">
            <div className="bg-white w-[16.51px] h-[19.19px] pb-[8.78px] pr-[3.33px]">
              <a href="#">
                <img src={logo1} alt="CLion" />
              </a>
            </div>
            <a href="/">
              <img src={logo2} alt="CLion" />
            </a>
          </div>
          <div className="flex gap-12 lg:gap-25 items-start flex-row">
            <div>
              <h3 className="font-[400] text-[12px] mb-[10px] text-[#D3D8DE] opacity-[50%]">
                Services
              </h3>

              {finances.map((finance, index) => {
                return (
                  <div>
                    <a
                      href="#"
                      key={index}
                      className="text-[#ffffff] font-[400] text-[14px] block mb-[10px]"
                    >
                      {finance}
                    </a>
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="font-[400] text-[12px] mb-[10px] text-[#D9D9D9] opacity-[50%]">
                Info
              </h3>
              {links.map((link, i) => {
                return (
                  <div>
                    <a
                      href={link.to}
                      key={i}
                      className="text-[#ffffff] font-[400] text-[14px] block mb-[10px]"
                    >
                      {link.link}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            src={before}
            alt="before"
            className="w-[45px] h-[1px]  lg:hidden"
          />
          <button className="h-[40px] w-[160px] bg-[#FFFFFF] text-[14px] font-[400] text-[#0C0C0C]">
            Get a consultation
          </button>
        </div>

        <div className="flex items-end lg:items-center justify-between  mt-[30px] lg:mt-[100px]">
          <div className="flex items-center gap-6">
            <img
              src={facebook}
              alt="facebookLogo"
              className="w-[16px] h-[16px]"
            />
            <img
              src={instagram}
              alt="instagramLogo"
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <img
              src={before}
              alt="before"
              className="w-[45px] h-[1px] hidden lg:block"
            />
            <div className="font-[400] text-[10px] md:text-[14px] text-[#ffffff] flex flex-col gap-2">
              <p>+1 891 989-11-91</p>
              <p>info@clion.com</p>
            </div>
          </div>

          <p className="font-[400] text-[8px] md:text-[12px] text-right text-[#D9D9D9] opacity-[50%]">
            © 2025 — Copyright
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
