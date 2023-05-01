import React from "react";
import newsletter from "../../assets/images/newsletter.jpeg";

const Newsletter = () => {
  return (
    <div
      className="h-96 relative bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${newsletter})` }}
    >
      <div className="">
        <h1 className="text-white text-start text-3xl font-bold">
          Subscribe to our Newsletter
        </h1>
        <p className=" text-gray-300 my-5">
          Fusce id velit placerat, efficitur libero placerat, sodales ante.
          Curabitur <br /> sed erosat orci congue vestibulum.
        </p>
        <button
          className="btn rounded-full text-white
          
        "
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
