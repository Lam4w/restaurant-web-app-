import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { increItem, decreItem } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: false,
    };
  }
  productDetails = this.props.cartItems.map((item) => {
    return {
      product_id: item._id,
      price: item.price,
      quantity: item.count,
      total: item.count * item.price,
    };
  });
  handleFormSubmit = async (values) => {
    const {user} = this.props;
    console.log('submitting form');
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
    alert("Need to save order for " + order.name)
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
    const { cartItems } = this.props;
    return (
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
         
        )}
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