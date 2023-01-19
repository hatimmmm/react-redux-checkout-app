import { createSlice } from "@reduxjs/toolkit";

const addToCartIS = {
  name: "",
  quantity: 0,
  nameValid: true,
  quantityValid: true,
  subTotal: 0,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  addToCartIS,
  reducers: {
    setName: (state, action) => (state.name = action.payload),
  },
});
export const { setName } = addToCartSlice.actions;
export default addToCartSlice;
