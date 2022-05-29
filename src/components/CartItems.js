import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2 style={{ marginLeft: "1rem", fontFamily: "'Russo One', sans-serif" }}>
        Your Cart
      </h2>
      <ul style={{ padding: 0 }}>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
