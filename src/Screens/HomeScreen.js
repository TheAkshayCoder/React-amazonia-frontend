import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const HomeScreen = () => {
  return (
    <ul className="products">
      {data.products.map((product) => {
        return (
          <li>
            <div className="product">
              <Link to={"/product/" + product.id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                  srcSet=""
                />
              </Link>
            </div>
            <div className="product-name">
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">Rs {product.price}</div>
            <div className="product-rating">
              Rating:{product.rating} Stars ({product.numReviews}) reviews{" "}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeScreen;
