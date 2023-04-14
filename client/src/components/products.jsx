// import { connect } from 'formik';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Zoom } from 'react-reveal';
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import Fade from "react-reveal/Fade";
import { addToCart } from '../actions/cartActions';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  openModal = (product) => {
    this.setState({ product});
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product} = this.state;
    console.log(this.props.products);
    // const {product} = this.state;
    // const { product, productsData, isLoading } = this.state;
    return (
      <div>
      <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
          <ul className="products">
            {this.props.products.map((product) => (
              product?.isAvailable && 
              <li key={product._id}>
                <div className="product">
                  <figure className="card-banner img-holder">
                    <img
                      src={product.picturePath}
                      width={250}
                      height={250}
                      alt={product.name}
                      className="img-cover"
                    ></img>
                  </figure>
                  <a href={'#' + product._id} onClick={() => this.openModal(product)}>
                    <h3>{product.name}</h3>
                  </a>
                  <div className="product-price">
                    <h4>{product.price.toLocaleString() + ' đ'}</h4>
                    <button onClick={() => this.props.addToCart(product)} className="btn primary">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
     </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="btn close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-detail">
                <img src={product.picturePath} alt={product.name}></img>
                <div className="desc">
                  <p>
                    <strong>{product.name}</strong>
                  </p>
                  <p>{product.desc}</p>
                  <p>
                    Type: {product.type}
                  </p>
                  <div className="product-price">
                    <div>Price: {product.price.toLocaleString() + ' đ'}</div>
                    <button
                      className="btn primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart
  }
)(Fetch);