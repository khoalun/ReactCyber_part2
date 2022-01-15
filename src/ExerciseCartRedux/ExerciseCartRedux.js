import React, { Component } from "react";
import CartRedux from "./CartRedux";
import ProductListsRedux from "./ProductListsRedux";
import { connect } from "react-redux";
class ExerciseCartRedux extends Component {
  renderIncrease = () => {
    return this.props.increaseCart.reduce((amount, productInCart, index) => {
      return (amount += productInCart.quantity);
    }, 0);
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center ">Phone Market</h3>
        <div className="text-right">
          <i
            className="fa fa-shopping-cart btn btn-dark "
            data-toggle="modal"
            data-target="#modelId"
          >
            <span> </span> ( {this.renderIncrease()} ) Adding Cart
          </i>
        </div>
        <ProductListsRedux />
        <CartRedux />
      </div>
    );
  }
}
// viet ham lay gia tri tu redux store ve bien thanh props component
const mapStateToProps = (state) => {
  return {
    increaseCart: state.stateCart.cartDefault,
  };
};
export default connect(mapStateToProps)(ExerciseCartRedux);
