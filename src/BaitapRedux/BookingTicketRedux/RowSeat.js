import React, { Component } from "react";
import { connect } from "react-redux";
class RowSeat extends Component {
  renderSeat = () => {
    return this.props.seat.danhSachGhe.map((ghe, index) => {
      let cssSeatReserved = "";
      let disabled = false;
      //Seat Reserved Adding Css
      if (ghe.daDat) {
        cssSeatReserved = "gheDuocChon";
        disabled = true;
      }
      // Trang thai ghe Dang Dat
      let cssSeatChoosing = "";
      // eslint-disable-next-line eqeqeq
      let indexChoosing = this.props.listChoosing.findIndex(
        (Pan) => Pan.ghe === ghe.soGhe
      );
      if (indexChoosing !== -1) {
        cssSeatChoosing = "gheDangChon";
      }
      return (
        // eslint-disable-next-line no-template-curly-in-string
        <button
          onClick={() => {
            this.props.bookingSeat(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssSeatReserved} ${cssSeatChoosing}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderFirstRow = () => {
    return this.props.seat.danhSachGhe.map((ghe, index) => {
      return (
        <button className="rowNumber" key={index}>
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderRow = () => {
    if (this.props.firstRow === 0) {
      return <div className="ml-4">{this.renderFirstRow()}</div>;
    } else {
      return (
        <div>
          {this.props.seat.hang} {this.renderSeat()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left  ml-5" style={{ fontSize: "30px" }}>
        {this.renderRow()}
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
    bookingSeat: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
   
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowSeat);
