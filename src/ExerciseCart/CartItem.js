import React, { Component } from "react";

export default class CartpropsItem extends Component {
  render() {
    let { propsItem } = this.props;
    return (
      <div
        className="card "
        style={{ marginTop: "12px", marginBottom: " 12px" }}
      >
        <img
          className="card-img-top mt-5"
          src={propsItem.hinhAnh}
          alt={propsItem.hinhAnh}
          style={{ width: "250px", height: "250px", marginLeft: "15%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{propsItem.tenSP}</h4>
          <p className="card-text">{propsItem.giaBan}</p>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.propsChangeItem(propsItem);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}
