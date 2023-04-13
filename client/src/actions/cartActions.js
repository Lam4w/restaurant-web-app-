import { ADD_TO_CART, REMOVE_FROM_CART,INCRE_ITEM,DECRE_ITEM } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    const newCartItems = cartItems.map((x) => {
      if (x._id === product._id) {
        alreadyExists = true;
        return { ...x, count: x.count + 1 };
      } else {
        return x;
      }
    });
    if (!alreadyExists) {
      newCartItems.push({ ...product, count: 1 });
    }
    dispatch({
      type: ADD_TO_CART,
      payload: { cartItems: newCartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
export const increItem = (product) => (dispatch, getState) => {
    const cartItems = [...getState().cart.cartItems];
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === product._id) {
        return Object.assign({}, item, {
          count: item.count + 1
        });
      }
      return item;
    });
    dispatch({
      type: INCRE_ITEM,
      payload: {
        cartItems: updatedCartItems
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

export const decreItem = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.map((item) =>
        item._id === product._id
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
    );
    dispatch({ type: DECRE_ITEM, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};


  
