import React, { Component } from "react";
import Profile from "./Profile";

class DemoPureComponent extends Component {
  state = {
    like: { soLuong: 0 },
  };
  likeImage = () => {
    let likeUpdating = this.state.like;
    likeUpdating.soLuong += 1;
    this.setState({
      like: {...likeUpdating},
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center font-weight-bold"> Profile hot girl</h3>
        <Profile like={this.state.like} />
        <br />
        <div className="card text-white bg-default" style={{ width: 300 }}>
          <h3 style={{ color: "black", marginLeft: 14 }}>
            View Like ({this.state.like.soLuong})
          </h3>
          <div className="card-body">
            <button
              style={{ color: "black", border: "3px solid black" }}
              onClick={() => {
                this.likeImage();
              }}
            >
              Giving Love <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoPureComponent;
