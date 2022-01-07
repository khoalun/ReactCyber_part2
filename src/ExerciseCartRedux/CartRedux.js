import React, { Component } from "react";
// lay du dieu cartDefault tu store ve
import { connect } from "react-redux";
class CartRedux extends Component {
  renderData = () => {
    return this.props.cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>
            <img src={item.img} alt={item.img} style={{ width: "150px" }} />
          </td>
          <td>{item.name}</td>
          <td>{(item.price).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
              onClick={() => {
                this.props.increaseDecreaseQuantity(item.id, false);
              }}
            >
              -
            </button>
            {item.quantity}
            <button
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                this.props.increaseDecreaseQuantity(item.id, true);
              }}
            >
              +
            </button>
          </td>
          <td>{(item.quantity * item.price).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.delete(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  renderTongTien = () => {
    return this.props.cart.reduce((amount, totalInCart, index) => {
      amount = totalInCart.quantity * totalInCart.price;
      return amount;
    }, 0);
  };
  render() {
    console.log(this.props.cart);

    return (
      <div>
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
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{this.renderData()}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5}></td>
                        <td>Total to pay</td>
                        <td>{this.renderTongTien().toLocaleString()}</td>
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
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Ham lay state redux bien doi thanh props component
const mapStateToProps = (state) => {
  return {
    cart: state.stateCart.cartDefault,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      let action = {
        type: "XOA_GIO_HANG",
        id,
      };
      console.log("id", id);
      dispatch(action);
    },
    increaseDecreaseQuantity: (id, increaseDecrease) => {
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        id,
        increaseDecrease,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartRedux);
