import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import RecipesDetails from "../RecipesDetails/RecipesDetails";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const Recipes = () => {
  const recipes = useLoaderData();
  const location = useLocation();
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    chef_details,
    likes,
  } = location.state;
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 font-bold mb-5 leading-relaxed">
        Chef Recipes
      </h1>
      <div className="flex flex-col lg:flex-row justify-between lg:w-4/5  mx-auto gap-28">
        <div className="lg:w-1/2 flex items-center">
          <div className="card card-compact bg-base-100">
            <figure className="h-80">
              <LazyLoad height={762}>
                <img src={chef_picture} alt="name" />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef_name}</h2>
              <p>{chef_details}</p>
              <div className="flex justify-start  gap-4 my-3">
                <div className="flex gap-2  items-center p-2 rounded-full bg-yellow-400">
                  <p>
                    <span className="font-bold">Experience:</span>{" "}
                    {years_of_experience} Years
                  </p>
                </div>
                <div className="flex gap-2 items-center bg-yellow-400 p-2 rounded-full">
                  <p>
                    <span className="font-bold ">Number of Recipes:</span>{" "}
                    {num_of_recipes}
                  </p>
                </div>
              </div>
              <div className="card-actions flex justify-between">
                <div className="flex justify-center items-center gap-2 border border-black rounded p-3">
                  <FaHeart color="tomato"></FaHeart>Like
                  <p>{likes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          {recipes.map((recipe) => (
            <RecipesDetails key={recipe.id} recipe={recipe}></RecipesDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
