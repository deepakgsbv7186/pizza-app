import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DisplayPizza from "./pages/DisplayPizza";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import "./App.css";

const App = () => {
  // set cart value at golbal level in localStorage
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cartUpdate = window.localStorage.getItem("cart");
    setCart(JSON.parse(cartUpdate));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" exact element={<Products />}></Route>
            <Route path="/products/:_id" element={<DisplayPizza />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};
export default App;
