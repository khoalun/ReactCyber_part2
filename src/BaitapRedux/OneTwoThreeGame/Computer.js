import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    return (
      <div>
        <div className="speech-bubble " style={{ marginRight: "75px" }}>
          <img
            width={100}
            className="computer"
            src={this.props.computer.img}
            alt={this.props.computer.img}
          />
        </div>
        <img
          src="./img/gameOneTwo/vegeta.jpg"
          alt="./img/gameOneTwo/vegeta.jpg"
          style={{ width: " 250px", height: "250px" }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.OneTwoThreeReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
