import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar/Navbar";
import Pizza from "../components/Pizza/Pizza";

const Products = () => {
  const [pizzas, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://star-spark-pasta.glitch.me/api/products")
      .then((response) => response.json())
      .then((pizzas) => {
        setProducts(pizzas);
      });
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Pizza Mania</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          {pizzas.map((pizza) => (
            <Pizza key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
