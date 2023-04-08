import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <Link to="/">
        <img className="pizza-logo" src="/images/logo.png" alt="logo-img" />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">OP Pizza</NavLink>
        <NavLink to="/cart">
          <div className="pizza-cart">
            <span>{cart.totalItems}</span>
            <img src="/images/cart.png" alt="cart-png" />
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
