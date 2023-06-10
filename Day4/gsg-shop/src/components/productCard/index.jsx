import React from "react";
import "./style.css";
const ProductCard = (props) => {
  // const { id, title, description, price, rating, brand, category, thumbnail } =
  //   props?.product;

  const { product } = props;
  if (product) {
    const {
      id,
      title,
      description,
      price,
      rating,
      brand,
      category,
      thumbnail,
    } = product;
  }

  return (
    <div className="product">
      <img src={thumbnail} alt={title} className="product-thumbnail" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <div className="product-details">
        <p className="product-price">${price}</p>
        <p className="product-rating">Rating: {rating}</p>
        <p className="product-brand">Brand: {brand}</p>
        <p className="product-category">Category: {category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
