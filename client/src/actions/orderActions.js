import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";
import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  try {
    // const res = await fetch("http://localhost:3001/orders/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(order)
    // });

    const res = await axios.post('http://localhost:3001/orders', order)

    if (!res.ok) {
      throw new Error("Error creating order");
    }

    // const data = await res.json();
    const data = await res.data;

    dispatch({ type: CREATE_ORDER, payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
    // handle error here
  }
};

  export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER });
  };
  export const fetchOrders = () => (dispatch) => {
    fetch("http://localhost:3001/orders/")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCH_ORDERS, payload: data });
      });
  };

  export function setUserId(userId) {
    return {
      type: 'SET_USER_ID',
      payload: userId,
    }
  }
  export const mapStateToProps = state => ({
    user_id: state.user.id,
    user_name: state.user.name
  });
  
  