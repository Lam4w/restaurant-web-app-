import React from "react";
import Cart from "../../components/cart";
import Filter from "../../components/filter";
import "./menu.css";
import Fetch from "../../components/products"
import store from "../../store";
import { Provider } from "react-redux";
class Menu extends React.Component {
   
    // createOrder = (order) => {
    //     alert("Need to save order for " + order.name);
    //   };
    render(){
        return (
          <Provider store={store}>
            <div id="top" className="home">
                <main className="main-menu">
          <div className="content">
            <div className="main-content">
              <Filter></Filter>
              <Fetch></Fetch>
            </div>
            <div className="sidebar">
              <Cart
              />
            </div>
          </div>
        </main>
            </div>
            </Provider>
        );
    }
}
export default Menu;