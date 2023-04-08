import { useState, useEffect } from "react";
// import { CartContext } from "../../CartContext";
import Pizza from "../Pizza/Pizza";

const Menu = () => {
  const [pizzas, setProducts] = useState([]);
  // const { name } = useContext(CartContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://star-spark-pasta.glitch.me/api/products"
        );
        const pizzas = await response.json();
        setProducts(pizzas);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <div className="container mx-auto pb-24"> */}
      <div className="container mx-auto px-14">
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

export default Menu;
