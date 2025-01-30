import React, { useContext, useState } from "react";
import LogoImage from "./Logo";
// import { searchContext } from "../contexts/Search";

const Header = () => {
  return (
    <header className="binge_header fixed w-full z-[100]">
      <nav className="grid grid-cols-3 p-4 items-center">
        <div>
          <LogoImage />
        </div>
        <div>
          <HeaderList />
        </div>
        {/* <div className="">
          <input
            type="search"
            className="outline-none text-[14px] p-2 pl-4 w-[80%] rounded-[50px]"
            placeholder="search movies..."
          />
        </div> */}
      </nav>
    </header>
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
        <a className="" href="">
          Sign Up
        </a>
      </li>
      <li className="">
        <a className="" href="">
          Login
        </a>
      </li>
    </ul>
  );
};

export default Header;
