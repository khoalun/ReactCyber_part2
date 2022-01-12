import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.arrayXucXac.map((xucxac, index) => {
      return (
        <img
          key={xucxac.id}
          src={xucxac.img}
          style={{ width: "50px", height: "50px" }}
          alt={xucxac.img}
          className="ml-2"
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return {
    arrayXucXac: state.BaitapXucXacReducer.arrayXucXac,
  };
};

export default connect(mapStatetoProps)(XucXac);
