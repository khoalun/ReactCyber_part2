import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItem extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div
        className="card text-center"
        style={{ marginTop: "12px", marginBottom: "12px" }}
      >
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          style={{ width: "250px", height: "250px", marginLeft: "15%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.addingCart(sanPham);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}
//gui du lieu len store

const mapDispatchToProps = (dispatch) => {
  return {
    // tao product moi' de render lai du lieu push vo cart
    addingCart: (sanPham) => {
      let spGioHang = {
        id: sanPham.maSP,
        name: sanPham.tenSP,
        img: sanPham.hinhAnh,
        quantity: 1,
        price: sanPham.giaBan,
      };
      //   console.log("product", spGioHang);
      let action = {
        type: "ADDING_CART",
        spGioHang,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
