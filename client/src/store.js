
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { productsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderReducer } from "./reducers/orderReducers";

// const initialState = {};
// const initialState = {
//   user_id: null,
// };

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});
// initialState;

const store = configureStore({
  reducer: rootReducer,
});
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER_ID:
//       return { ...state, user_id: action.payload };
//     default:
//       return state;
//   }
// };

export default store;
