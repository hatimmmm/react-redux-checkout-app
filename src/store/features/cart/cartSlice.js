import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/items";
import products from "../../data/techProducts";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: data, items: [], products: products },
  reducers: {
    setItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    remItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { setItems, remItem } = cartSlice.actions;
