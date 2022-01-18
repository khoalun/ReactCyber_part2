import React, { Component } from "react";
import { ModelContext } from "../_Context/ModelContext";

class LikeProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="mt-2">
              <div
                className="card text-white bg-default"
                style={{ width: 300 }}
              >
                <div className="card-body">
                  <button
                    className="card-title"
                    onClick={() => {
                      value.setLike();
                    }}
                  >
                    {value.state} Like <i className="fa fa-heart"> </i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}

export default LikeProfile;
