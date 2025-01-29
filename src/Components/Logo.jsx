import React from "react";
import Logo from "../assets/fast-forward-circle-svgrepo-com.svg";

const LogoImage = () => {
  return (
    <div className="logo text-white flex items-center gap-2">
      <img className="w-[8%] cursor-pointer" src={Logo} alt="logo-img" />
      <p className="font-bold text-[28px]">BingeBox</p>
    </div>
  );
};

export default LogoImage;
