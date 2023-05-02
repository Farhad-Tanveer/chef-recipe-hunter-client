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
      <div className="min-h-100vh">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
