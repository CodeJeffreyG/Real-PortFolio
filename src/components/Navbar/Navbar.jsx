import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsLink } from "react-icons/bs";
import Logo from "../assets/logo.png";
// import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav((prevNav) => !prevNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Logo}
          alt=""
          style={{ width: "125px" }}
          className="select-none"
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger bar */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menue */}

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl select-none">Home</li>
        <li className="py-6 text-4xl select-none">About</li>
        <li className="py-6 text-4xl select-none">Skills</li>
        <li className="py-6 text-4xl select-none">Work</li>
        <li className="py-6 text-4xl select-none">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#076023]">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
