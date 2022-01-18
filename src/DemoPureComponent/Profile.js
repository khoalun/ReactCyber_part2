import React, { Component, PureComponent } from "react";

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className="card text-white bg-dark" style={{ width: "300px" }}>
          <img
            style={{ width: "300px", height: "300px" }}
            className="card-img-top"
            src="https://luv.vn/wp-content/uploads/2021/02/Hinh-anh-hot-girl-hoc-sinh-de-thuong-nhat-2.jpg"
            alt="123"
          />
          <div className="card-body">
            <h3>
              Quantity Love : <i className="fa fa-heart"></i>    {this.props.like.soLuong}
            </h3>
            <h4 className="card-title">Name: Dao Thi Buoi</h4>
            <p className="card-text">Age: 18</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
