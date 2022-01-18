import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelSeat } from "../../redux/actions/BookingTicketActions";
class InformationSeat extends Component {
  render() {
    return (
      <div className="mt-2">
        <button className="gheDuocChon" style={{ marginRight: "2px" }}></button>
        <span
          className="text-light"
          style={{ fontSize: "30px", marginLeft: "23px" }}
        >
          Seat Reserved
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span
          className="text-light"
          style={{ fontSize: "30px", marginLeft: "23px" }}
        >
          Seat Choose
        </span>
        <br />
        <button className="ghe" style={{ marginLeft: "0" }}></button>
        <span
          className="text-light"
          style={{ fontSize: "30px", marginLeft: "23px" }}
        >
          Seat Empty
        </span>
        <br />

        <div className="mt-5">
          <table className="table" border="3">
            <thead>
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <td>Seat Number</td>
                <td>Price</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.listChoosing.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        // onClick={() => {
                        //   this.props.cancelSeat(item.soGhe);
                        // }}

                        onClick={() => {
                          this.props.dispatch(cancelSeat(item.soGhe));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td className="text-warning">
                  {this.props.listChoosing.reduce(
                    (total, seatBooking, index) => {
                      return (total += seatBooking.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listChoosing: state.BookingTicketReducer.listChoosing,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     cancelSeat: (id) => {
//       dispatch({
//         type: "HUY_GHE",
//         id,
//       });
//     },
//   };
// };

export default connect(mapStateToProps)(InformationSeat);
