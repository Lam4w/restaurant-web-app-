import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { increItem, decreItem } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";
import Modal from 'react-modal';
import { Zoom } from 'react-reveal';
// import { mapStateToProps } from "../actions/orderActions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: false,
    };
  }
  productDetails = this.props.cartItems.map((item) => {
    return {
      name: item.name,
      price: item.price,
      desc: item.desc,
      picturePath:item.picturePath,
      type: item.type,
      isAvailable: item.isAvailable
    };
  });
  handleFormSubmit = async (values, onSubmitProps) => {
    const {user} = this.props;
    console.log('submitting form');
    // onSubmitProps.resetForm();
    const order = {
      user_id: user._id,
      name: values.name,
      phone: values.phone,
      address: values.address,
      note: values.note,
      products: this.productDetails,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    console.log(this.user_id);
    console.log("Submitting order:", order);
    this.props.createOrder(order);
  };
 
 
  closeModal = () => {
    this.props.clearOrder();
  };
  initialValues = {
    name: "",
    phone: "",
    address: "",
    note: "",
  };
  
  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    address: Yup.string().required("Required"),
    note: Yup.string(),
  });
  render() {
    // const userData = JSON.parse(localStorage.getItem('user'));
    // const userId = userData._id;
    const { user } = this.props;
    const { cartItems, order } = this.props;
    return (
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
         
        )}
        {/* {
          order && <Modal isOpen={true} onRequestClose={this.closeModal}>
          <Zoom>
            <button className="close-modal" onClick={this.closeModal}>
              x
            </button>
            <div className="order-details">
              <h3 className="success-message">Your order has been placed.</h3>
              <h2>Order {order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Phone:</div>
                  <div>{order.phone}</div>
                </li>
                <li>
                  <div>Address:</div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Date:</div>
                  <div>{order.createdAt}</div>
                </li>
                <li>
                  <div>Total:</div>
                  <div>{(order.total)+" đ"}</div>
                </li>
                <li>
                  <div>Cart Items:</div>
                  <div>
                    {order.cartItems.map((x) => (
                      <div>
                        {x.count} {" x "} {x.name}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
        } */}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div className="productInfo">
                    <div>
                      <img src={item.picturePath} alt={item.name}></img>
                    </div>
                    <div className="info">
                      <div>{item.name}</div>
                      <div>{item.price + " đ"}</div> 
                    </div>
                  </div>
                  <div>
                    <div className="right">
                      <div className="itemCount">
                        <button
                          className="btn"
                          onClick={() => this.props.decreItem(item)}
                        >
                          -
                        </button>
                        <span> {item.count} </span>
                        <button
                          className="btn"
                          onClick={() => this.props.increItem(item)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {cartItems.reduce((a, c) => a + c.price * c.count, 0)} {" đ"}
                </div>
              </div>
              <button
                onClick={() => {
                  this.setState({ showCheckout: true });
                }}
                className="btn primary"
              >
                Proceed
              </button>
            </div>
          )}
          </div>
          {this.state.showCheckout && (
      <div className="cart">
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleFormSubmit}
        >
          {({ errors, touched,values, handleSubmit }) => (
            <Form className="checkoutForm" onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <Field
                  name="name"
                  placeholder="Enter your name"
                  value={values.name}
                  className={errors.name && touched.name ? 'error' : null
                  
                }
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div>
                <label>Phone</label>
                <Field
                  name="phone"
                  placeholder="Enter your phone number"
                  value={values.phone}
                  className={errors.phone && touched.phone ? 'error' : null}
                />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>

              <div>
                <label>Address</label>
                <Field
                  name="address"
                  placeholder="Enter your address"
                  value={values.address}
                  className={errors.address && touched.address ? 'error' : null}
                />
                <ErrorMessage name="address" component="div" className="error-message" />
              </div>

              <div>
                <label>Note</label>
                <Field
                  name="note"
                  value={values.note}
                  placeholder="Add a note for your order (optional)"
                  as="textarea"
                />
              </div>

              <button type="submit" className="btn primary">
                Place Order
              </button>
            </Form>
          )}
          
        </Formik>
      </div>
    )}
      </div>
      
    );
    
    }
    }
    const mapStateToProps = state => ({
      user_id: state.user.id,
      user_name: state.user.name
    });
  export default connect(
    (state) => ({
      order: state.order.order,
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart,increItem,decreItem,  createOrder, clearOrder, mapStateToProps }
  )(Cart);