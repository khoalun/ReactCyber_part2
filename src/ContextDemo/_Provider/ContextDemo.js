import React, { Component } from "react";
import LikeProfile from "./LikeProfile";
import ModelProfile from "./ModelProfile";
import ModelStateProvider from "./ModelStateProvider";
import { ModelContext } from "../_Context/ModelContext";
class ContextDemo extends Component {
  render() {
    return (
      <ModelStateProvider>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container">
            <ModelProfile />
            <LikeProfile />
          </div>
        </div>
      </ModelStateProvider>
    );
  }
}

export default ContextDemo;
