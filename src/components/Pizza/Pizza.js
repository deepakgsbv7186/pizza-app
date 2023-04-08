import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";

const Pizza = (props) => {
  // add button feature
  const [isAdding, setIsAdding] = useState(false);
  const basicStyle = "py-1 px-4 rounded-full font-bold";
  // get cart
  const { cart, setCart } = useContext(CartContext);
  // fetch pizza data for menu component
  const { pizza } = props;

  // add to cart
  const addToCart = (event, pizza) => {
    event.preventDefault();
    // How the cart looks like {Structure}
    // const cart ={
    //   items:{
    //     '60c67ba9f5ee510015f3dda6':3,
    //     '60c67b32f5ee510015f3dda0':5
    //   },
    //   totalItems:8
    // }

    let _cart = { ...cart };
    // check for items exists in localStorage
    if (!_cart.items) {
      _cart.items = {};
    }
    // check and assign cart value
    _cart.items[pizza._id]
      ? (_cart.items[pizza._id] += 1)
      : (_cart.items[pizza._id] = 1);

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <>
      <Link to={`/products/${pizza._id}`}>
        <div>
          <img src={pizza.image} alt="pizza-name" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{pizza.name}</h2>
            <span className="bg-red-400 py-1 rounded-full text-sm text-white px-4">
              {pizza.size}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>₹{pizza.price}</span>
            {/* <button
              onClick={(e) => {
                addToCart(e, pizza);
              }}
              className={`${
                isAdding ? "bg-green-500" : "bg-yellow-500"
              } py-1 px-4 rounded-full font-bold`}
            >
              ADD{isAdding ? "ED" : ""}
            </button> */}
            {isAdding ? (
              <button disabled className={`bg-green-500 ${basicStyle}`}>
                ADDED
              </button>
            ) : (
              <button
                onClick={(e) => {
                  addToCart(e, pizza);
                }}
                className={`bg-yellow-500 ${basicStyle}`}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Pizza;
