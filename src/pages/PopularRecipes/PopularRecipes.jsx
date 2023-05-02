import React from "react";
import food1 from "../../assets/images/food1.jpeg";
import food2 from "../../assets/images/food2.jpeg";
import food3 from "../../assets/images/food3.jpeg";
import food4 from "../../assets/images/food4.jpeg";
import { FaHatCowboy } from "react-icons/fa";

const PopularRecipes = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto gap-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className=" h-64">
          <img
            className=" cursor-pointer object-cover w-full aspect-square hover:scale-110 transition duration-300 ease-in-out"
            src={food1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Spring Rolls</h2>
          <p>
            <FaHatCowboy></FaHatCowboy> <span>Zhang Xiaoli</span>
          </p>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className=" h-64">
          <img
            className="cursor-pointer object-cover w-full aspect-square hover:scale-110 transition duration-300 ease-in-out"
            src={food2}
            alt="food"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Momo</h2>
          <p>
            <FaHatCowboy></FaHatCowboy> <span>Chen Xiaoming</span>
          </p>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className=" h-64">
          <img
            className="cursor-pointer object-cover w-full aspect-square hover:scale-110 transition duration-300 ease-in-out"
            src={food3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chow Mein</h2>
          <p>
            <FaHatCowboy></FaHatCowboy> <span>Wang Jie</span>
          </p>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className=" h-64">
          <img
            className="cursor-pointer object-cover w-full aspect-square hover:scale-110 transition duration-300 ease-in-out"
            src={food4}
            alt="food"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chinese Hot Pot</h2>
          <p>
            <FaHatCowboy></FaHatCowboy> <span>Li Wei</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipes;
