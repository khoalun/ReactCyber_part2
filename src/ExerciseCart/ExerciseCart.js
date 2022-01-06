import React, { Component } from "react";
import CartModal from "./CartModal";
import ItemList from "./ItemList";
export default class ExerciseCart extends Component {
  state = {
    cartDefault: [],
  };

  addingToCart = (newItem) => {
    console.log(newItem);
    let newProductInCart = {
      id: newItem.maSP,
      name: newItem.tenSP,
      price: newItem.giaBan,
      quantity: 1,
      image: newItem.hinhAnh,
    };

    // Finding the Product already in cart or not
    let index = this.state.cartDefault.findIndex(
      (newPd) => newPd.id === newProductInCart.id
    );

    if (index !== -1) {
      //tìm thấy sản phẩm được click chứa trong giỏ hàng => Tăng số lượng
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.cartDefault[index].quantity += 1;
    } else {
      //Không tìm thấy trong giỏ hàng chứa sp đó => thêm sp đó vào giỏ
      this.state.cartDefault.push(newProductInCart);
    }
    // let gioHangCapNhat = [...this.state.gioHang];
    this.setState({
      cartDefault: this.state.cartDefault,
    });
  };

  deleteCart = (id) => {
    console.log(id);
    //this.setState....
    let index = this.state.cartDefault.findIndex((newPd) => newPd.id === id);
    if (index !== -1) {
      this.state.cartDefault.splice(index, 1);
    }
    this.setState({
      cartDefault: this.state.cartDefault,
    });
  };
  totalSignCart = () => {
    // solution 1:
    // let amount = 0;
    // for (let i = 0; i < this.state.cartDefault.length; i++) {
    //   let productInCart = this.state.cartDefault[i];
    //   amount += productInCart.quantity;
    // }
    // return amount;
    //solution 2 : reduce
    return this.state.cartDefault
      .reduce((amount, productInCart, index) => {
        return (amount += productInCart.quantity);
      }, 0)
      .toLocaleString();
  };

  plusMinusAmount = (id, number) => {
    let index = this.state.cartDefault.findIndex((newPD) => newPD.id === id);
    if (index !== -1) {
      if (this.state.cartDefault[index].quantity <= 1 && number === -1) {
        alert("At least is 1");
        return;
      }
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.cartDefault[index].quantity += number;
    }
    this.setState({
      cartDefault: this.state.cartDefault,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center display-4">Phone Market</h3>
        <div className="w3-padding w3-display-topright w3-button w3-border w3-hover-black">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-shopping-cart mr-5 ">
              ({this.totalSignCart()}) Adding Cart
            </i>
          </span>
        </div>
        <CartModal
          propsCart={this.state.cartDefault}
          deleteCart={this.deleteCart}
          plusMinusCart={this.plusMinusAmount}
        />
        <ItemList propsChangeItem={this.addingToCart} />
      </div>
    );
  }
}
f
