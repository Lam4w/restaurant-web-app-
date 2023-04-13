
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { productsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
// import { orderReducer } from "./reducers/orderReducers";

// const initialState = {};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
//   order: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
