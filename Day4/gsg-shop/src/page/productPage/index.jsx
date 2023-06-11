import React, { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./../../components/productCard";
import productList from "../../Data/productList";
import categoryList from "../../Data/categoryList";
import branList from "../../Data/branList";

const ProductPage = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  // using one : without []
  // run in each render
  useEffect(() => {
    console.log("Hi From use Effect in each render");
  });

  // using two with empty []
  // run in init render
  useEffect(() => {
    console.log("Hi From  use Effect with []");
    setFilterProducts(productList);
  }, []);

  // using three with  [state]
  // run in when the categoryFilter state change

  useEffect(() => {
    const temp = productList?.filter((product) => {
      if (categoryFilter === "") {
        return true;
      } else {
        return product?.category === categoryFilter;
      }
    });
    console.log("categoryFilter 111111111 : ", temp);
    setBrandFilter("");
    setFilterProducts(temp);
  }, [categoryFilter]);

  // using three with  [state]
  // run in when the brandFilter state change
  useEffect(() => {
    const temp = productList?.filter((product) => {
      if (brandFilter === "") {
        return true;
      } else {
        return product?.brand === brandFilter;
      }
    });
    console.log("brandFilter 111111111 : ", temp);
    setCategoryFilter("");
    setFilterProducts(temp);
  }, [brandFilter]);

  return (
    <div className="product-page">
      <div className="column col-filter">
        <h2>Filters</h2>
        <div className="filter-options">
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            <option value="">All Brands</option>
            {categoryList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* Brand filter */}
          <select
            value={brandFilter}
            onChange={(event) => setBrandFilter(event.target.value)}
          >
            <option value="">All Brands</option>
            {branList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="column col-product">
        <h2>Product List</h2>
        <div className="product-list">
          {filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
