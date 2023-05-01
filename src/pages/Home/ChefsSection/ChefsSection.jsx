import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ChefsSection = ({ chef }) => {
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    chef_details,
    likes,
  } = chef;
  return (
    <div className="mb-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="h-80">
          <img src={chef_picture} alt="name" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>{chef_details}</p>
          <div className="flex gap-4 my-3">
            <div className="flex gap-2  items-center">
              <p>
                <span className="font-bold">Experience:</span>{" "}
                {years_of_experience} Years
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>
                <span className="font-bold">Number of Recipes:</span>{" "}
                {num_of_recipes}
              </p>
            </div>
          </div>
          <div className="card-actions flex justify-between">
            <div className="flex justify-center items-center gap-2 bg-secondary border border-black rounded p-3">
              <FaHeart color="tomato"></FaHeart>Like
              <p>{likes}</p>
            </div>
            <div>
              <Link>
                <button className="btn border border-black text-white">
                  View Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsSection;
