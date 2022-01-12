import React, { Component } from "react";
import Computer from "./Computer";
import InformationGame from "./InformationGame";
import "./OneTwoThree.css";
import Player from "./Player";
import { connect } from "react-redux";
class OneTwoThree extends Component {
  render() {
    return (
      <div className="game  ">
        <div className="row text-center" style={{ marginTop: "100px" }}>
          <div className="col-4 ">
            <Player />
          </div>

          <div className="col-4">
            <InformationGame />
            <button
              className="btn btn-success padding-3 display-4 mt-5 font-size-15"
              style={{ width: "125px", height: "85px", fontSize: "25px" }}
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch({
        type: "RAN_DOM",
      });
    },
  };
};
export default connect(null,mapDipatchToProps)(OneTwoThree);
