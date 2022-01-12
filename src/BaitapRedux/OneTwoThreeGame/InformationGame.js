import React, { Component } from "react";
import { connect } from "react-redux";
class InformationGame extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.result}</div>;
        <div className="display-4 text-success">
          Round Win : <span className="text-warning">{this.props.roundWin}</span>
        </div>
        <div className="display-4 text-success">
          Total Round: <span className="text-warning">{this.props.totalRound}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.OneTwoThreeReducer.result,
    roundWin: state.OneTwoThreeReducer.roundWin,
    totalRound: state.OneTwoThreeReducer.totalRound,
  };
};

export default connect(mapStateToProps)(InformationGame);
