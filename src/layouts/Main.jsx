import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Home/Shared/Header/Header";
import background_img from "../assets/images/bg.jpeg";

const Main = () => {
  return (
    <>
      <div
        className=" min-h-screen relative bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${background_img})` }}
      >
        <div className="bg-neutral opacity-40 min-h-full w-full absolute object-contain ">
          {" "}
        </div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
