import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import PageNotFound from './pages/PageNotFound';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <NavBar></NavBar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Navigate to='/'></Navigate>}></Route>
      <Route path="/product" element={<Product></Product>}></Route>
      <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
    </>
  )
}

export default App
