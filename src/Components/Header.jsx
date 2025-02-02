import React, { useContext, useState } from "react";
import LogoImage from "./Logo";
import { useNavigate } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="binge_header fixed w-full z-[100] relative">
      <nav className="flex flex-row justify-between p-4 items-center">
        <div className="">
          <LogoImage />
        </div>
        <div className="flex justify-between items-center gap-2">
          <RiMenuFill className=" sm:hidden text-white text-3xl cursor-pointer" />
          <HeaderList />
        </div>
      </nav>
    </header>
  );
};

const HeaderList = () => {
  const navigate = useNavigate();

  return (
    <ul className="hidden nav-items sm:flex flex-col absolute left-0 top-[82px] bg-[#2b2b2b] p-4 px-24 sm:p-0 sm:bg-transparent h-[100vh] sm:h-[0vh] sm:top-[0px] sm:right-[0px] sm:left-[0px] sm:bottom-[0px] sm:static sm:flex-row items-center gap-6 cursor-pointer text-[14px]">
      <li className="" onClick={() => navigate("/")}>
        <a href="">Home</a>
      </li>
      <li className="" onClick={() => navigate("/movies")}>
        <a href="">Movies</a>
      </li>
      <li className="" onClick={() => navigate("/movies")}>
        <a href="">Country</a>
      </li>
      <li className="" onClick={() => navigate("/signup")}>
        <a className="" href="">
          Sign Up
        </a>
      </li>
      <li className="" onClick={() => navigate("login")}>
        <a className="" href="">
          Login
        </a>
      </li>
    </ul>
  );
};

export default Header;
