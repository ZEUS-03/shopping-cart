import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    history: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (product) => product.id === item?.id
      );
      if (existingItemIndex == -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[existingItemIndex] = {
          ...item,
          qty: state?.cart[existingItemIndex]?.qty + 1,
        };
      }
      let totalCartVal = 0;
      state.cart.forEach((e, i) => {
        totalCartVal += e.price * e.qty;
      });
      if (!state.history) {
        state.history = [];
      }
      const dateTime = new Date().toLocaleString();
      totalCartVal = parseFloat(totalCartVal.toFixed(2));
      state.history.push({
        dateTime,
        amount: totalCartVal,
      });
    },
    removeFromCart: (state, action) => {
      const id = action?.payload;
      const existingItemIndex = state.cart.findIndex(
        (product) => product.id === id
      );
      if (existingItemIndex !== -1) {
        state.cart.splice(existingItemIndex, 1);
      }
      let totalCartVal = 0;
      state.cart.forEach((e, i) => {
        totalCartVal += e.price * e.qty;
      });
      if (!state.history) {
        state.history = [];
      }
      const dateTime = new Date().toLocaleString();
      totalCartVal = parseFloat(totalCartVal.toFixed(2));
      state.history.push({
        dateTime,
        amount: totalCartVal,
      });
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
