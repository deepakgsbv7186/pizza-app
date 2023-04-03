import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <h2>Logo Here</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
