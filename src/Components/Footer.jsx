import React from "react";
// import the logo
import LogoImage from "./Logo";
import { CiLink } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <footer className="text-white bg-blue-900 pb-8">
      <div className="max-w-[90%] mx-auto">
        <FooterCard />
        <MainComponent />
      </div>
    </footer>
  );
};

const FooterCard = () => {
  return (
    <section className="footer_banner relative bottom-6 p-8 md:p-16 md:px-16 rounded-xl shadow-xl">
      <div className="information">
        <h1 className="recently_header capitalize text-white text-2xl md:text-3xl text-center md:text-left">
          Watch BingeBox today it's Amazing
        </h1>
        <p className="text-sm py-2 font-normal text-center md:text-left">
          Login or create an account, and enjoy unlimited movie updates and
          information.
        </p>
        <div className="button_card flex flex-col sm:flex-row gap-2 text-white text-sm mt-2">
          <button className="bg-[blue] p-4 px-8 rounded-[50px] cursor-pointer">
            Latest Movies
          </button>
          <button className="bg-blue-900 p-4 px-8 rounded-[50px] cursor-pointer ">
            <CiLink className="text-[18px] inline" />
            Search Your Favorite movies
          </button>
        </div>
      </div>
    </section>
  );
};

const MainComponent = () => {
  return (
    <section className="footer_component grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="footer_information">
        <LogoImage />
        <p className="mt-2 text-[14px] font-normal leading-6">
          BingeBox is a movie websites, connect with us and many others explore
          our applications and how it solves issues as regards entertainment in
          the movie industry.
        </p>
        <div className="email_phoneNumber">
          <p className="flex flex-col"></p>
        </div>
      </div>
      <div className="first_info">
        <h2 className="font-bold">Genres</h2>
        <ol className="flex flex-wrap gap-8 mt-4 pb-8 border-b-[1px]">
          <li className="bg-white  text-blue-900 p-2 px-6 rounded-[50px] font-bold">
            Action
          </li>
          <li className="bg-white  text-blue-900 p-2 px-6 rounded-[50px] font-bold">
            Fantasy
          </li>
          <li className="bg-white  text-blue-900 p-2 px-6 rounded-[50px] font-bold">
            Fiction
          </li>
          <li className="bg-white  text-blue-900 p-2 px-6 rounded-[50px] font-bold">
            Horror
          </li>
          <li className="bg-white  text-blue-900 p-2 px-6 rounded-[50px] font-bold">
            Thriller
          </li>
        </ol>
        <div className="info">
          <ol className="socials details flex text-2xl sm:text-xl gap-8 mt-4">
            <FaFacebook />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaXTwitter />
          </ol>
        </div>
      </div>
    </section>
  );
};
export default FooterComponent;
