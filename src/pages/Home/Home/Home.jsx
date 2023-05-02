import React from "react";
import { useLoaderData } from "react-router-dom";
import background_img from "../../../assets/images/bg2.jpeg";
import Newsletter from "../../Newsletter/Newsletter";
import PopularRecipes from "../../PopularRecipes/PopularRecipes";
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
      <h1 className="text-5xl text-center mt-10 font-bold mb-5 leading-relaxed">
        Our Beloved Chefs
      </h1>
      <p className=" text-gray-500 text-center mb-16">
        With years of experience and a true passion for cooking, this talented
        chef creates dishes that are both delicious and visually stunning.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:w-3/4 mx-auto lg:my-16">
        {chefsData.map((chef) => (
          <ChefsSection chef={chef} key={chef.id}></ChefsSection>
        ))}
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
      <h1 className="text-5xl text-center mt-10 font-bold mb-5 leading-relaxed">
        Most Popular Recipes
      </h1>
      <p className=" text-gray-500 text-center mb-16">
        With its mouthwatering aroma and satisfying taste, it's no surprise that
        this recipe has become a beloved classic among foodies.
      </p>
      <div className="mb-20">
        <PopularRecipes></PopularRecipes>
      </div>
    </div>
  );
};

export default Home;
