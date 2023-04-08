import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DisplayPizza = () => {
  const [pizza, setPizza] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
      .then((response) => response.json())
      .then((pizza) => {
        setPizza(pizza);
      });
  }, []);

  // console.log(params);
  return (
    <>
      <Navbar />
      <button className="m-5 font-bold" onclick={() => navigate(-1)}>
        🡠 Back
      </button>
      <div className="flex mt-14 ml-12">
        <img src={pizza.image} alt="pizza" />
        <div className="mt-10 ml-10 p-4">
          <h2 className="p-2 text-xl">{pizza.name}</h2>
          <span className="bg-red-600 py-1 rounded-full text-sm px-4">
            {pizza.size}
          </span>
          <div className="ml-4 mt-4">
            <span>₹{pizza.price}</span>
          </div>
          <button className="bg-yellow-500 rounded-full font-bold m-2 p-1">
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayPizza;
