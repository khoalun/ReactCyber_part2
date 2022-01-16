import React, { Component } from "react"
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
          }`;
    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div
          className="speech-bubble "
          style={{
            marginRight: "75px",
            padding: "82px",
            marginTop: "15px",
            left: "1%",
          }}
        >
          <div style={{ postion: "relative" }}>
            <img
              style={{
                position: "absolute",
                animation: `randomItem${Date.now()} 0.5s`,
                left: "41.5%",
                bottom: "14%",
              }}
              width={100}
              className="computer"
              src={this.props.computer.img}
              alt={this.props.computer.img}
            />
          </div>
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
