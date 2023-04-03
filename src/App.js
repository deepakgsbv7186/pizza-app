import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
