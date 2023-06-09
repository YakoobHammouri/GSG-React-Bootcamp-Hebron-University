import React, { useEffect, useState } from "react";
import "./style.css";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="column col-filter">
        <h2>Filters</h2>
        <div className="filter-options">
          {/* category filter */}
          <select>
            <option value="">All category</option>
          </select>

          {/* Brand filter */}
        </div>
      </div>
      <div className="column col-product">
        <h2>Product List</h2>
        <div className="product-list">?{/* Product list */}</div>
      </div>
    </div>
  );
};

export default ProductPage;
