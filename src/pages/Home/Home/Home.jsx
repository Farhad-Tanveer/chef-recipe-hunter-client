import React from "react";
import background_img from "../../../assets/images/bg2.jpeg";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${background_img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-start text-neutral-content">
          <div className="max-w-md absolute bottom-1/4 left-20 right-0 text-white">
            <h1 className="mb-5 text-5xl font-bold font-mono">
              Chinese foods even better than an{" "}
              <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">
                Anything
              </span>
            </h1>
            <p className="mb-5">
              Learn how to make your favorite restaurant’s dishes with best chef
            </p>
            <button className="btn btn-secondary">Visit us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
