import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import Navbar from "../components/Navbar/Navbar";

const Cart = () => {
  const navigate = useNavigate();
  const [pizzaItem, setPizzaItem] = useState([]);
  const { cart } = useContext(CartContext);
  console.log(cart);
  useEffect(() => {
    if (!cart.items) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://star-spark-pasta.glitch.me/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) }),
          }
        );
        const pizzaItems = await response.json();
        setPizzaItem(pizzaItems);
        console.log(pizzaItems);
      } catch (error) {
        console.error("Error is: ", error);
      }
    };
    fetchData();
  }, [cart]);
  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:w-3/4 w-full pb-24">
        <button className="m-5 font-bold" onClick={() => navigate(-1)}>
          🡠 Back
        </button>
        <h2 className="my-12 font-bold">Cart Items</h2>
        <ul>
          <li className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-16"
                  src="/images/peproni.png"
                  alt="pizza-img"
                />
                <span className="font-bold ml-4 w-48">{pizzaItem.name}</span>
              </div>
              <div>
                <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                  -
                </button>
                <b className="px-4">5</b>
                <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                  +
                </button>
              </div>
              <span>
                <strong>₹599</strong>
              </span>
              <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
                Delete
              </button>
            </div>
          </li>
          <li className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-16"
                  src="/images/peproni.png"
                  alt="pizza-img"
                />
                <span className="font-bold ml-4 w-48">Double Pizza</span>
              </div>
              <div>
                <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                  -
                </button>
                <b className="px-4">5</b>
                <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                  +
                </button>
              </div>
              <span>
                <strong>₹599</strong>
              </span>
              <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
                Delete
              </button>
            </div>
          </li>
        </ul>
        <hr className="font-bold my-2 text-black" />
        <div className="flex justify-between mt-6">
          <strong>Grand Total: ₹1198</strong>
          <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
            Place Order →
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
