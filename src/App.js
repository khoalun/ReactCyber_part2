import React, { Component } from "react";
// import ProductList from "./Props/ProductList/ProductList";
// import dataJson from "./Data/data.json";
import PhoneList from "./Props/PhoneList/PhoneList";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="row">
          <div className="col-4">
            <div
              className="nav flex-column nav-pills justify-content-center"
              style={{ minHeight: "800px" }}
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Menu
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Shop
              </a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <ProductList arrayProduct={dataJson} />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                Shop
              </div>
            </div>
          </div>
        </div> */}

          <PhoneList/>

      </div>
    );
  }
}
