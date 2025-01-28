import React from "react";
import Logo from "../assets/fast-forward-circle-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="binge_header fixed w-full z-100">
      <nav className="grid grid-cols-3 p-6 items-center">
        <div>
          <LogoImage />
        </div>
        <div>
          <HeaderList />
        </div>
        <div className="">
          <input
            type="search"
            className="outline-none text-[14px] p-2 pl-4 w-[80%] rounded-[50px]"
            placeholder="search movies..."
          />
        </div>
      </nav>
    </header>
  );
};

const LogoImage = () => {
  return (
    <section className="cursor-pointer">
      <div className="logo text-white flex gap-2">
        <img className="w-[8%] cursor-pointer" src={Logo} alt="logo-img" />
        <p className="font-bold text-[28px]">BingeBox</p>
      </div>
    </section>
  );
};

const HeaderList = () => {
  return (
    <ul className="nav-items flex items-center gap-6 cursor-pointer text-[14px]">
      <li className="">
        <a href="">Genre</a>
      </li>
      <li className="">
        <a href="">Movies</a>
      </li>
      <li className="">
        <a href="">Country</a>
      </li>
      <li className="">
        <a
          className="text-white  py-2 px-4 rounded-xl cursor-pointer hover:text-[#001580] hover:bg-white duration-300 border border-none hover:border-solid"
          href=""
        >
          Sign Up
        </a>
      </li>
      <li className="">
        <a
          className="text-white py-2 px-4 rounded-xl cursor-pointer hover:text-[#001580] hover:bg-white duration-300 border border-none hover:border-solid"
          href=""
        >
          Login
        </a>
      </li>
    </ul>
  );
};

export default Header;
