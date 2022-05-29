import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    change: false,
    addToCart: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.change = true;
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.change = true;

      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.totalQuantity--;
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    closeADDTOCART(state) {
      state.showCart = false;
    },
  },
});
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiSliceActions.showNotification({
//         open: true,
//         message: "Sending Request",
//         type: "warning",
//       })
//     );
//     const sendRequest = async () => {
//       const res = await fetch(
//         "https://redux-http-46bd1-default-rtdb.firebaseio.com/cartItems.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       const data = await res.json();
//       // send state as a request is successful
//       dispatch(
//         uiSliceActions.showNotification({
//           open: true,
//           message: "Sending Request to Databse Successfully",
//           type: "success",
//         })
//       );
//     };
//     try {
//       await sendRequest();
//     } catch (error) {
//       dispatch(
//         uiSliceActions.showNotification({
//           open: true,
//           message: "Sending Request Failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };
export const cartActions = cartSlice.actions;

export default cartSlice;
