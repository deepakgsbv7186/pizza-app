import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
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
            <span>10</span>
            <img src="/images/cart.png" alt="cart-png" />
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
