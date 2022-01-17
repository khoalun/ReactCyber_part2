import React, { Component } from "react";
import "./BookingTicket.css";
import InformationSeat from "./InformationSeat";
import dataRowSeat from "../../Data/dataChair.json";
import RowSeat from "./RowSeat";
class BookingTicket extends Component {
  renderRowSeat = () => {
    return dataRowSeat.map((item, index) => {
      return (
        <div key={index}>
          <RowSeat seat={item} firstRow={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="booking"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/lofibg.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4">Booking Ticket</div>
                <div
                  style={{ fontSize: "35px", color: "ivory" }}
                  className="mt-2"
                >
                  Screen
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderRowSeat()}
                </div>
              </div>
              <div className="col-4 ">
                <div className="text-light display-4">Booking Seat</div>
                <InformationSeat />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingTicket;
