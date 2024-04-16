import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Footer from "./components/Footer/Footer";
import MyAccount from "./Pages/MyAccount/MyAccount";
import ProductDetails from './Pages/ProductDetails/ProductDetails';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-category/:category" element={<CategoryPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        {/* account */}
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-account/login" element={<MyAccount />} />
        <Route path="/my-account/forgot-password" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
