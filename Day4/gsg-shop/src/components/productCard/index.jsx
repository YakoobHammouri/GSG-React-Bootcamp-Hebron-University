import React from "react";
import "./style.css";
const ProductCard = (props) => {
  const { id, title, description, price, rating, brand, category, thumbnail } =
    props?.product;

  return <div className="product"></div>;
};

export default ProductCard;
