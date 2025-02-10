import React, { useState } from "react";
import LogoImage from "./Logo";
import { useNavigate } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="binge_header w-full z-[100] bg-black shadow-md">
      <nav className="flex flex-row justify-between p-4 items-center">
        <div className="">
          <LogoImage />
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <RiMenuFill
            className="sm:hidden text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Animated Navigation Menu */}
        <HeaderList isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

const HeaderList = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation List */}
      <motion.ul
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="hidden sm:flex flex-row items-center gap-6 cursor-pointer text-[14px] text-white"
      >
        <motion.li
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          className="cursor-pointer"
        >
          Home
        </motion.li>
        <motion.li
          onClick={() => {
            navigate("/movies");
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          className="cursor-pointer"
        >
          Movies
        </motion.li>
        <motion.li
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          className="cursor-pointer"
        >
          Country
        </motion.li>
        <motion.li
          onClick={() => {
            navigate("/login");
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          className="cursor-pointer"
        >
          Login
        </motion.li>
        <motion.li
          onClick={() => {
            navigate("/signup");
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          className="cursor-pointer"
        >
          Sign Up
        </motion.li>
      </motion.ul>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-[75%] bg-gray-900 p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out sm:hidden z-50`}
      >
        {/* Close Button */}
        <RiCloseFill
          className="text-white text-3xl cursor-pointer absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Nav Items */}
        <ul className="flex flex-col mt-10 space-y-6 text-white text-lg">
          <motion.li
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.1, color: "#facc15" }}
            className="cursor-pointer"
          >
            Home
          </motion.li>
          <motion.li
            onClick={() => {
              navigate("/movies");
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.1, color: "#facc15" }}
            className="cursor-pointer"
          >
            Movies
          </motion.li>
          <motion.li
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.1, color: "#facc15" }}
            className="cursor-pointer"
          >
            Country
          </motion.li>
          <motion.li
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.1, color: "#facc15" }}
            className="cursor-pointer"
          >
            Login
          </motion.li>
          <motion.li
            onClick={() => {
              navigate("/signup");
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.1, color: "#facc15" }}
            className="cursor-pointer"
          >
            Sign Up
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
