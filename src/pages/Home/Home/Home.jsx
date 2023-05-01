import React from "react";
import { useLoaderData } from "react-router-dom";
import background_img from "../../../assets/images/bg2.jpeg";
import ChefsSection from "../ChefsSection/ChefsSection";

const Home = () => {
  const chefsData = useLoaderData();
  console.log(chefsData);
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
              Chinese foods are even better than{" "}
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
      <h1 className="text-3xl text-center mt-10 font-bold mb-5 leading-relaxed">
        Our Beloved Chefs
      </h1>
      <div className="grid grid-cols-2 w-1/2 mx-auto my-16">
        {chefsData.map((chef) => (
          <ChefsSection chef={chef} key={chef.id}></ChefsSection>
        ))}
      </div>
    </div>
  );
};

export default Home;
