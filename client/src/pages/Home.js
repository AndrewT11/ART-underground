import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import ImageCarousel from "../components/Carousel/ImageCarousel";

const Home = () => {
  return (
    <div className="container, img-container">
      <ImageCarousel />
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
