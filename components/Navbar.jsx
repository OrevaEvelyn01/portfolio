"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Resume",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    
    {
      name: "Contact Me",
      url: "/contact",
    },
    {
      name: "Projects",
      url: "/reviews",
    },
  ];

  return (
    <nav className="flex items-center justify-center py-8 px-18 shadow-md pt-10 bg-black text-[#e2d2f3]">
     
      {/* desktop view */}
      <div className="flex items-center gap-20 max-lg:hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-[#6c4c8e] hover:underline transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}

      
      </div>

      {/* mobile and tab view */}
      <div className="lg:hidden z-50">
        <button onClick={() => setNavOpen(!navOpen)} className="text-2xl">
          {navOpen ? <IoMdClose /> : <RiMenu3Line />}
        </button>
      </div>

      <div
        className={`bg-gray-50 h-dvh overflow-hidden w-full fixed top-0 left-0 lg:hidden ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-16 pt-20">
          {navItems.map((item, index) => (
            <Link
              onClick={() => setNavOpen(false)}
              key={index}
              href={item.url}
              className="text-2xl"
            >
              {item.name}
            </Link>
          ))}
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;