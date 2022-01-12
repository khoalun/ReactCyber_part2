import React, { Component } from "react";
import "./OddEvenGameRedux.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";
class OddEvenGameRedux extends Component {
  render() {
    return (
      <div className="game">
        <div className="text-center mt-5 display-4">Game Odd Even</div>
        <div className="row text-center">
          <div className="col-5">
            <button
              className="btn btn-success buttons"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              Tai
            </button>
          </div>

          <div className="col-2">
            <XucXac />
          </div>

          <div className="col-5">
            <button
              className="btn btn-success buttons"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              Xiu
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center mt-5">
          <ThongTinTroChoi />
          <button
            className="btn btn-success display-4 play"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      // tao action
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      //gui len reducer
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(OddEvenGameRedux);
