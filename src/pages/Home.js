import Navbar from "../components/Navbar/Navbar";
// import Pizza from "../components/Pizza/Pizza";
import Products from "./Products";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2" style={{ marginLeft: "180px" }}>
            <h6 className="text-lg">Are you hungry?</h6>
            <h1 className="text-3x1 md:text-6x1 font-bold">Don't wait !</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2 right">
            <img src="/images/pizza.png" alt="pizza" />
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
