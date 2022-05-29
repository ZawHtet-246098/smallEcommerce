import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
      {/* <p>$ {Math.floor(Math.random() * 1000)}</p> */}
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
