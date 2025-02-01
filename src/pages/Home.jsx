import React from "react";
import Recently from "../Components/Recently";
import Trending from "../Components/Trending";
import OtherMovies from "../Components/otherMovies";
// the icons from react icons
import { FaCirclePlay } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="">
      <HomeBanner />
      <Recently />
      <Trending />
      <OtherMovies />
    </section>
  );
};
// HOME BANNER WILL BE PROPS
const HomeBanner = () => {
  return (
    <section className="home_banner py-[100px] lg:pt-[200px] lg:pb-[80px] flex flex-row justify-between items-center">
      <MiniBanner />
    </section>
  );
};

const MiniBanner = () => {
  return (
    <section className="">
      <div className="max-w-[90%] mx-auto text-white text-[16px] font-bold">
        <div className="banner_btn flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <div className="watch_now bg-[blue] p-4 rounded-lg flex items-center gap-3 hover:bg-blue-700 hover:text-[20px] duration-300">
            <button>Watch Now</button>
            <FaCirclePlay className="text-white" />
          </div>
          <div className="watch_now border-[4px] border-[blue] p-4 rounded-lg flex items-center gap-3 hover:border-blue-700 hover:text-[20px] duration-300">
            <button>Watch Later</button>
            <IoTimeSharp className="text-white" />
          </div>
        </div>
      </div>
      {/* the title and movie information */}
      <InfoSection />
    </section>
  );
};

const InfoSection = () => {
  return (
    <section className="max-w-[90%] mx-auto text-white mt-8">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Avatar: The way of Water
        </h1>
        <div className="categories_info flex flex-wrap gap-4 items-center font-bold cursor-pointer">
          <p className="bg-white p-2 rounded-[50px] text-[14px] text-black">
            Action
          </p>
          <p className="bg-white p-2 rounded-[50px] text-[14px] text-black">
            Thriller
          </p>
          <p className="bg-white p-2 rounded-[50px] text-[14px] text-black">
            Fantasy
          </p>
          <div className="flex gap-2 items-center font-normal text-[16px]">
            <SlCalender />
            <p className="">2022</p>
          </div>
          <div className="flex gap-2 items-center font-normal text-[16px]">
            <IoTimeSharp />
            <p className="">3:10:02</p>
          </div>
          <div className="flex gap-2 items-center font-normal text-[16px]">
            <FaStar />
            <p className="">Rating</p>
          </div>
        </div>
      </div>
      <div className="content lg:w-[50%]">
        <p className="font-medium text-[14px] leading-6">
          Set more than a decade after the events of the first film, learn the
          story of the sully family jake, Neytiri, and their kids, the trouble
          that follows them, the lengths they go to keep each other safe, the
          battles they fight to stay alive, and the tragedies they endure.
        </p>
      </div>
    </section>
  );
};
// the main homepage that holds all the components

// fetching the components that handles the display of all the movies in an external component

// creating the categories list or menu or drop down

// the section for popular watched movies

export default HomePage;
