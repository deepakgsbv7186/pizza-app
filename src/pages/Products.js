import Navbar from "../components/Navbar/Navbar";
import Pizza from "../components/Pizza/Pizza";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Pizza Mania</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>
      </div>
    </>
  );
};

export default Products;
