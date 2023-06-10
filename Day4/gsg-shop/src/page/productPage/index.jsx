import "./style.css";
import React, { useEffect, useState } from "react";
import ProductList from "./../../Data/productList";
import CategoryList from "./../../Data/categoryList";
import BranList from "./../../Data/branList";
import ProductCard from "../../components/productCard";
const ProductPage = () => {
  const [products, setProducts] = useState(ProductList);
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
  }, []);

  // using three with  [state]
  // run in when the state change
  useEffect(() => {
    console.log("Hi From  use Effect with category Filter");
  }, [categoryFilter]);

  // console.log(categoryFilter);

  // const productsFilter = products.filter(() => {
  //   console.log("Hi From Product Filter ");
  // });

  // const bardnFilter = products.filter(() => {
  //   console.log("Hi From bardn Filter Filter ");
  // });

  return (
    <div className="product-page">
      <div className="column col-filter">
        <h2>Filters</h2>
        <div className="filter-options">
          {/* category filter */}
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            <option value="">All category</option>
            {CategoryList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>

          {/* Brand filter */}
          <select
            value={brandFilter}
            onChange={(event) => setBrandFilter(event.target.value)}
          >
            <option value="">All brand</option>
            {BranList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="column col-product">
        <h2>Product List</h2>
        <div className="product-list">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
