import React from "react";
import LogoImage from "../Components/Logo";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="pt-16 h-[100vh] max-w-[25%] mx-auto flex justify-center items-center">
      <Sign />
    </div>
  );
};

const Sign = () => {
  return (
    <section className="login_form">
      <div className="mb-2">
        <LogoImage />
      </div>
      <form action="" method="" className="flex flex-col gap-4">
        <input
          type="name"
          placeholder="Your Name"
          className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer"
        />
        <input
          type="password"
          placeholder="Your Password"
          className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer"
          required
        />
        <input
          type="submit"
          value="Sign Up"
          className="text-white bg-blue-800 p-2 rounded-lg cursor-pointer"
        />
      </form>
      <h4 className="flex justify-center my-2 text-white font-normal">OR</h4>
      <div className="login_2">
        <div className="text-black flex items-center justify-center gap-2 bg-blue-100 p-2 rounded-lg">
          <FcGoogle className="text-xl" />
          <button className="text-[12px]">Create account with Google</button>
        </div>
        <p className="text-[11px] text-white mt-2">
          Already have an accoount on BingeBox? <b>Log In</b>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
