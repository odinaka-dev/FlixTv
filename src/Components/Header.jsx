import React from "react";
import Logo from "../assets/fast-forward-circle-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="fixed w-full z-100">
      <nav className="flex flex-row justify-center items-center p-4">
        <LogoImage />
        <HeaderList />
      </nav>
    </header>
  );
};

const LogoImage = () => {
  return (
    <div className="logo flex items-center gap-2 cursor-pointer">
      <img className="w-[5%] cursor-pointer" src={Logo} alt="logo-img" />
      <p className="font-bold text-[28px]">BingeBox</p>
    </div>
  );
};

const HeaderList = () => {
  return (
    <ul className="flex items-center gap-4">
      <li className="">
        <a href="">About</a>
      </li>
      <li className="">
        <a href="">Movies</a>
      </li>
      <li className="">
        <a href="">categories</a>
      </li>
      <li className="">
        <a
          className="text-white bg-[#001580] py-2 px-4 text-[14px] rounded-xl cursor-pointer hover:text-[#001580] hover:bg-white duration-300 border border-none hover:border-solid"
          href=""
        >
          Sign Up
        </a>
      </li>
      <li className="">
        <a
          className="text-white bg-[#001580] py-2 px-4 text-[14px] rounded-xl cursor-pointer hover:text-[#001580] hover:bg-white duration-300 border border-none hover:border-solid"
          href=""
        >
          Login
        </a>
      </li>
    </ul>
  );
};

export default Header;
