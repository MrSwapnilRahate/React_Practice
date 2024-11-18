import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
