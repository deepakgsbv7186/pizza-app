import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <Navbar />
      <h2 style={{ fontSize: "4rem", color: "Red" }}>404</h2>
      <h3 style={{ fontSize: "2rem", color: "Yellow" }}>Page Not</h3>
      <h3>
        <Link to="/">Home Page</Link>
      </h3>
    </>
  );
};
export default Error;
