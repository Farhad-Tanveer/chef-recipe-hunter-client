import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipesDetails from "../RecipesDetails/RecipesDetails";

const Recipes = () => {
  const recipes = useLoaderData();
  const [chefs, setChefs] = useState();
  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-farhad-tanveer.vercel.app/chefsData"
    );
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 font-bold mb-5 leading-relaxed">
        Chef Recipes
      </h1>
      <div className="flex flex-col lg:flex-row justify-between lg:w-3/5  mx-auto">
        <div className="lg:w-1/2">
          <h2>Chef section</h2>
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
