import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button className="m-5 font-bold" onClick={() => navigate(-1)}>
        🡠 Back
      </button>
      <Menu />
    </>
  );
};

export default Products;
