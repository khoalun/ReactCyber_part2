import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.productsData.map((item, index) => {
        return (
          <div className="col-3" key={index}>
           <ProductItem propsItem={item} changeDatatoSecond={this.props.changeData} /> 
          </div>
        );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
