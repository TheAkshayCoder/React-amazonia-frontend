import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const ProductScreen = (props) => {
  console.log(data.products[0].id);
  const product = data.products.find(
    (obj) => obj.id.toString() === props.match.params.id
  );
  return (
    <>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} stars ({product.numReviews}) Reviews
            </li>
            <li>
              Price: <strong>Rs {product.price}</strong>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price:{product.price}</li>
            <li>Status:{product.status}</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
