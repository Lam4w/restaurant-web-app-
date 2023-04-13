import { ADD_TO_CART, INCRE_ITEM, REMOVE_FROM_CART, DECRE_ITEM } from "../types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case INCRE_ITEM:
      return {cartItems: action.payload.cartItems};
    case DECRE_ITEM:
      return {cartItems: action.payload.cartItems};
    default:
      return state;
  }
};