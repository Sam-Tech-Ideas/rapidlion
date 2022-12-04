import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import image1 from '../assets/for.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About Us",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 4,
      link: "Contact Us",
    },
  ];
  return (
    <div className=" w-screen  h-20 text-black    bg-yellow-300">
      <div className="flex items-center justify-between w-full h-full px-3">
        <div className="flex items-center pt-[40px] pb-10">
          <img src={image1} alt="" height="" width="" className="w-[72px] " />
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-3 hover:border-b-2 hover:border-b-gray-900   hover:text-black duration-300 text-xl cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex mr-[126px]">
          <a
            href="mailto:axestech1@gmail.com"
            className=" hover:text-white px-6   bg-black py-2 rounded text-white"
            target="_blank"
          >
            Contact Us
          </a>
        </div>

        <div
          className=" md:hidden cursor-pointer p-3"
          onClick={() => {
            setNav(true);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>

      {/**menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur z-50 "
            : ""
        }
      >
        <div
          className={
            nav
              ? "shadow-xl fixed left-0 top-0 w-4/5 bg-black text-white h-full z-50  p-10 ease-in duration-300"
              : "fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full "
          }
        >
          <div className="flex items-center justify-between w-full text-white">
            <h1 className="text-lg text-black "></h1>

            <div onClick={() => setNav(false)} className="cursor-pointer p-3">
              <FaTimes size={30} />
            </div>
          </div>
          <ul className="pt-10">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="p-4 hover:text-blue-600 duration-300 text-lg cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
          <div>
            <a
              href="mailto:axestech1@gmail.com"
              target="_blank"
              className="bg-blue-600 w-full ml-3 rounded-md hover:bg-blue-800 px-4 py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
