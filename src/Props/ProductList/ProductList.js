import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";
export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrayProduct.map((item, index) => {
        return (
          <div className="col-4" key={index}>
           <ProductItem renderItem={item} />
          </div>
        );
    });
  };
  render() {
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
