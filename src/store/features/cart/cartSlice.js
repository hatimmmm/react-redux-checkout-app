import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/items";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: data },
});

export default cartSlice.reducer;
// export const { setItems } = cartSlice.actions;
