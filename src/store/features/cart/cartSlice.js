import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/items";
import products from "../../data/techProducts";
import { useEffect } from "react";
import { FaYenSign } from "react-icons/fa";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: data,
    items: [],
    products: products,
  },
  reducers: {
    setItems: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].amount += 1;
      } else {
        const total = action.payload.price;
        const newItem = { ...action.payload, amount: 1, total: total };
        state.items = [...state.items, newItem];
      }
    },
    amountInc: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[itemIndex].amount += 1;
    },
    amountDec: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].amount >= 1) {
        state.items[itemIndex].amount -= 1;
      } else {
        state.items[itemIndex].amount = 1;
      }
    },
    remItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { setItems, remItem, amountInc, amountDec } = cartSlice.actions;
