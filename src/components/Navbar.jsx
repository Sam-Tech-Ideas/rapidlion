
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/for.png"
import { useLocation } from "react-router-dom";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();



  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id:5,
      link:"/about",
      name:"About Us"
    },
    {
      id: 2,
      link: "/services",
      name: "Services",
    },
    {
      id: 3,
      link: "/contact",
      name: "Contact",
    },
    {
      id: 4,
      link: "/products",
      name: "Products",
    },

  ];

 
  return (
    <div className=" fixed bg-white w-screen h-20 z-20 text-gray-600  bg-gradient-to-r from-gray-100 via-[#fdffbc] to-gray-100">
      <div className="px-3 flex items-center justify-around w-full h-full">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold">
            <img
              src={logo}
              className="w-20 h-10 bg-cover bg-center"
              alt="logo"
            />
          </h3>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`capitalize p-4 cursor-pointer hover:text-pink-700 duration-300 ${
                location.pathname === link
                  ? "text-yellow-800 font-semibold"
                  : ""
              }`}
            >
              <Link to={link}>
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex mr-4"></div>
        {/**Burger icon */}
        <div className=" md:hidden">
          <div onClick={() => setNav(true)} className="cursor-pointer p-3">
            <FaBars size={30} />
          </div>
        </div>
      </div>
      {/**Mobile menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "shadow-xl fixed left-0 top-0 w-4/5 bg-gray-300  h-full p-10 ease-in duration-300"
              : "fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full "
          }
        >
          <div className="flex w-full items-center justify-between text-white">
            <img
              src={logo}
              className="w-20 h-10 bg-cover bg-center"
              alt="logo"
            />
            <div onClick={() => setNav(false)} className="p-3 cursor-pointer">
              <FaTimes size={30} color="black" />
            </div>
          </div>
          <div className="">
            <h1 className="text-red-500 text-lg"></h1>
            <ul className="pt-7 pb-6">
              <div>
                {links.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className={`capitalize p-4 cursor-pointer hover:text-pink-700 duration-300 ${
                      location.pathname === link
                        ? "text-yellow-800 font-semibold"
                        : ""
                    }`}
                  >
                    <Link to={link}>
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </div>

              {/* <a href="#blog">
                {" "}
                <li className="p-4  text-xl   hover:border-b-2 ">
                  How it works
                </li>
              </a> */}
            </ul>
            <div className=" ml-4 ">
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
