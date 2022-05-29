import React, { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import LoginForm from "./components/Login-form/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiSliceActions } from "./store/ui-slice";
import { fetchData, sendCartData } from "./store/cath-action";
import CartItems from "./components/CartItems";
let isFirstRender = true;

function App() {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const show = useSelector((state) => state.login.show);

  // fetch data from rapid api
  useEffect(async (type) => {
    // setIsLoading(true);

    const response = await fetch(
      `https://latest-laptop-deals.p.rapidapi.com/`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "latest-laptop-deals.p.rapidapi.com",
          "X-RapidAPI-Key":
            "fe8d6e6d52msh5a8b7aae978daa6p1479b0jsnfef4e6764d77",
        },
      }
    );
    const data = await response.json();
    setApiData(data);
    console.log(data);
    // setIsLoading(false);
  }, []);

  // console.log(isLoggedIn);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.change) {
      dispatch(sendCartData(cart));
    }

    // const sendRequest = async () => {
    // send state as sending request
    // dispatch(
    //   uiSliceActions.showNotification({
    //     open: true,
    //     message: "Sending Request",
    //     type: "warning",
    //   })
    // );
    //   const res = await fetch(
    //     "https://redux-http-46bd1-default-rtdb.firebaseio.com/cartItems.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   const data = await res.json();
    //   // send state as a request is successful
    //   dispatch(
    //     uiSliceActions.showNotification({
    //       open: true,
    //       message: "Sending Request to Databse Successfully",
    //       type: "success",
    //     })
    //   );
    // };
    // sendRequest().catch((err) => {
    // send state as error
    // dispatch(
    //   uiSliceActions.showNotification({
    //     open: true,
    //     message: "Sending Request Failed",
    //     type: "error",
    //   })
    // );
    // });
  }, [cart, dispatch]);
  console.log(show);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!show && <LoginForm />}
      {show && <Layout />}
      {/* {cart.showCart && <CartItems />} */}

      {/* <Auth /> */}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
