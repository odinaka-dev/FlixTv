import React from "react";
import { FaRegHourglassHalf } from "react-icons/fa6";

const Load = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-8">
      <div className="my-2">
        <FaRegHourglassHalf className="animate-spin text-3xl" />
      </div>
      <p className="">Fetching data.....</p>
    </div>
  );
};

export default Load;
