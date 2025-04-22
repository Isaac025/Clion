import React from "react";
import logo1 from "../assets/Vector.png";
import logo2 from "../assets/Vector2.png";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const navLinks = [
  {
    link: "Home",
    to: "#",
  },
  {
    link: "About",
    to: "#",
  },
  {
    link: "Contact",
    to: "#",
  },
  {
    link: "Resources",
    to: "#",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="layout">
      <nav className=" h-[84px] flex justify-between items-center relative">
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
        <div className="text-[#ffffff] hidden lg:flex gap-[65px] items-center">
          {navLinks.map((link, index) => {
            return (
              <a href={link.to} key={index} className="text-[16px] font-[400]">
                {link.link}
              </a>
            );
          })}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <MdClose size={30} /> : <CiMenuBurger size={30} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="text-[#ffffff] flex flex-col lg:hidden gap-[10px] items-start absolute top-[90px] bg-black font-[700] w-1/2 left-0 p-2.5">
          {navLinks.map((link, index) => {
            return (
              <a href={link.to} key={index}>
                {link.link}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav;
