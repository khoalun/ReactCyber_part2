import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderData = () => {
    return this.props.productData.map((item, index) => {
      return (
        <div className="col-3">
         <ProductItem propsData={item} changetoSecondButton={this.props.changeButton}/>
        </div>
      );
    });
  }; 

  render() {
    return <div className="row ">{this.renderData()}</div>;
  }
}
