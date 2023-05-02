import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Home/Shared/Header/Header";
import background_img from "../assets/images/bg.jpeg";

const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
