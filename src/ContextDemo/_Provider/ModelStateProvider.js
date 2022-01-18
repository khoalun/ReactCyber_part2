import { ModelContext } from "../_Context/ModelContext";
import React, { Component } from "react";

class ModelStateProvider extends Component {
  state = {
    like: 7,
  };
  setLike = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };
  render() {
    return (
      <ModelContext.Provider
        value={{ state: this.state.like, setLike: this.setLike }}
      >
        {/* //area to use context */}
        {this.props.children}
      </ModelContext.Provider>
    );
  }
}

export default ModelStateProvider;
