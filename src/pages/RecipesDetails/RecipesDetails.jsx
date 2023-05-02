import React from "react";
import { useState } from "react";
import { FaStar, FaHamburger, FaHeart } from "react-icons/fa";
import swal from "sweetalert";

const RecipesDetails = ({ recipe }) => {
  const { recipe_img, recipe_name, rating, cooking_method, ingredients } =
    recipe;
  const [clicked, setClicked] = useState(false);

  const handleAlert = () => {
    swal("Good job!", "Added your favorite list!", "success");
    setClicked(true);
  };
  return (
    <div>
      <div>
        <div>
          <div className="card lg:card-side bg-base-100">
            <figure className="w-full lg:w-64">
              <img
                className="rounded-lg h-48 cursor-pointer object-cover w-full aspect-square hover:scale-110 transition duration-300 ease-in-out"
                src={recipe_img}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe_name}</h2>
              <div className="flex justify-start gap-2">
                <p className=" bg-yellow-500 w-5 rounded-full flex justify-center items-center gap-1 text-white">
                  {rating} <FaStar color="white"></FaStar>{" "}
                </p>
                <p className=" bg-yellow-500 w-16 rounded-full flex justify-center items-center gap-1 text-white">
                  {ingredients.length} ingredients{" "}
                  <FaHamburger color="white"></FaHamburger>{" "}
                </p>
              </div>
              <p>{cooking_method.slice(0, 40)}...</p>
              <div className="card-actions justify-start">
                <button
                  onClick={handleAlert}
                  disabled={clicked}
                  className="btn rounded-lg"
                >
                  <FaHeart color="tomato"></FaHeart>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
