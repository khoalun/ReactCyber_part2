import React, { Component } from "react";
import { connect } from "react-redux";
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
              {this.props.listChoosing.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.cancelSeat(gheDangDat.soGhe);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
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

const mapDispatchToProps = (dispatch) => {
  return {
    cancelSeat: (soGhe) => {
      dispatch({
        type: "HUY_GHE",
        soGhe,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InformationSeat);
