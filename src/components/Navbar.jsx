import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import LogoImage from "../assets/logo.png";
import User from "../assets/User.svg";
import Flag from "../assets/Flag.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`sticky top-0 z-50 bg-[white] ${showMenu ? 'pb-4' : ''}`}>
      <nav className="flex items-center justify-between p-4">
        <div className={`flex items-center ${showMenu ? 'fixed top-4 left-4 md:static ' : 'md:static'}`}>
          <img src={LogoImage} alt="Logo" className="w-[50%] lg:w-[80%] mr-2" />
        </div>
        <div className="flex items-center justify-center flex-1"> 
          <div
            className={`flex flex-col md:flex-row md:space-x-4 md:items-center p-1 lg:mt-4 ${
              showMenu ? 'flex items-center justify-center mt-4' : 'hidden md:flex'
            }`}
          >
          <a href="#" className="text-[#202020] hover:text-[#811141] hover:underline">Home</a>
          <a href="#" className="text-[#202020] hover:text-[#811141] hover:underline my-4 lg:my-0">Brand</a>
          <a href="#" className="text-[#202020] hover:text-[#811141] hover:underline ">About Us</a>
          <a href="#" className="text-[#202020] hover:text-[#811141] hover:underline my-4 lg:my-0">How it Works</a>
          <a href="#" className="text-[#202020] hover:text-[#811141] hover:underline">Pricing</a>
          <a href="#" className="text-[#202020] hover:text-[#811141] hover:underline my-4 lg:my-0">Contact</a>
          </div>
        </div>
        <div className={`flex items-center ${showMenu ? 'fixed top-4 right-20 md:relative' : ''}`}>
          <img src={Flag} alt="" className="h-8 w-8 mr-2" />
          <img src={User} alt="" className="h-10 w-10" />
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {showMenu ? (
            <AiOutlineClose className={`text-white text-xl ${showMenu ? 'fixed top-4 right-4 md:relative' : ''}`} color='black' />
          ) : (
            <AiOutlineMenu className="text-white text-xl" color='black' />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

