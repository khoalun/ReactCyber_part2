import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          You Choose :
          <span className="text-danger ml-5">
            {this.props.taiXiu ? "Tai" : "Xiu"}
          </span>
        </div>
        <div className="display-4">
          Round Win :
          <span className="text-success ml-5">{this.props.roundWin}</span>
        </div>
        <div className="display-4">
          Total Round :
          <span className="text-primary ml-4">{this.props.totalRound}</span>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    taiXiu: state.BaitapXucXacReducer.taiXiu,
    roundWin: state.BaitapXucXacReducer.roundWin,
    totalRound: state.BaitapXucXacReducer.totalRound,
  };
};
export default connect(mapStatetoProps)(ThongTinTroChoi);
