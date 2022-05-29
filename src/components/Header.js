import React from "react";
import { useDispatch } from "react-redux";
// import { authActions } from "../store/auth_slice";
import { loginSliceActinos } from "../store/loginSlice";
import { cartActions } from "../store/cartSlice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginSliceActinos.logout());
  };
  const showCart = () => {
    dispatch(cartActions.closeADDTOCART());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              onClick={showCart}
              className="header-h2"
              style={{ fontSize: "28px" }}
            >
              LAPTOP<span style={{ color: "orangered" }}>Store</span>
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logoutHandler} className="logout-btn ">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
