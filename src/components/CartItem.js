import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h3> {name}</h3>
      <p style={{ padding: "0 1rem" }}>${price} /-</p>
      <p style={{ padding: "0 1rem" }}>x{quantity}</p>
      <article style={{ padding: "0 1rem" }}>Total ${total}</article>
      <div className="cartItemBtns">
        <button className="cart-actions" onClick={decrementCartItem}>
          -
        </button>
        <button className="cart-actions" onClick={incrementCartItem}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
