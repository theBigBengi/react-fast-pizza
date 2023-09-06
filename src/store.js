import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./featuers/user/userSlice";
import cartReducer from "./featuers/cart/cartSlice";

const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
});

export default store;
