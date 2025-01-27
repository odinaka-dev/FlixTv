import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section className="">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
