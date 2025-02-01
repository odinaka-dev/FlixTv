import React from "react";
import Logo from "../assets/fast-forward-circle-svgrepo-com.svg";

const LogoImage = () => {
  return (
    <div className="logo text-white flex items-center gap-2">
      <div className="w-[50%] sm:w-[50px] md:w-[50px] xl:w-[50px]">
        <img className="cursor-pointer" src={Logo} alt="logo-img" />
      </div>
      <p className="font-bold text-[28px]">BingeBox</p>
    </div>
  );
};

export default LogoImage;
