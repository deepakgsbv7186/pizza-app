import React from "react";
import { Link } from "react-router-dom";

const Pizza = (props) => {
  const { pizza } = props;
  return (
    <>
      <Link to={`/products/${pizza._id}`}>
        <div>
          <img src={pizza.image} alt="pizza-name" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{pizza.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
              {pizza.size}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>₹{pizza.price}</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
              ADD
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Pizza;
