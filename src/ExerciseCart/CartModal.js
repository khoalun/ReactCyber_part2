import React, { Component } from "react";

export default class CartModal extends Component {
  renderInCart = () => {
    let { propsCart } = this.props;
    return propsCart.map((productInCart, index) => {
      return (
        <tr key={index}>
          <td>{productInCart.id}</td>
          <td>
            <img
              src={productInCart.image}
              alt={productInCart.image}
              style={{ width: 100, height: 100, marginRight: "60%" }}
            />
          </td>
          <td>{productInCart.name}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.plusMinusCart(productInCart.id, -1);
              }}
              style={{ marginRight: "12px" }}
            >
              -
            </button>
            {productInCart.quantity.toLocaleString()}
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.plusMinusCart(productInCart.id, 1);
              }}
              style={{ marginLeft: "12px" }}
            >
              +
            </button>
          </td>
          <td>{productInCart.price.toLocaleString()}</td>
          <td>
            {(productInCart.price * productInCart.quantity).toLocaleString()}
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteCart(productInCart.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  totalMoney = () => {
    let { propsCart } = this.props;
    return propsCart.reduce((amountTotal, productInCart, index) => {
      return (amountTotal += productInCart.quantity * productInCart.price);
    }, 0);
  };
  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ minWidth: "1000px" }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderInCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"> </td>
                      <td>Total Money</td>
                      <td>{(this.totalMoney()).toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Process to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
