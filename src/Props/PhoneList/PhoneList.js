import React, { Component } from "react";
import PhoneItem from "../PhoneItem/PhoneItem";

export default class PhoneList extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    sanPhamDefault: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  renderData = () => {
    return this.mangSanPham.map((item, index) => {
      return (
        <div className="col-4 text-center" key={index}>
          <PhoneItem propsData={item}  propsUpdatingState={this.changeData}/>
        </div>
      );
    });
    };
    
    changeData = (newData) => { 
        this.setState({
             sanPhamDefault: newData
         })
    }

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center display-4"> Danh sách sản phẩm</h3>
        <div className="row"> {this.renderData()}</div>

        <div className="row">
          <div className="col-4">
            <h3>{this.state.sanPhamDefault.tenSP}</h3>
            <img
              src={this.state.sanPhamDefault.hinhAnh}
              alt={this.state.sanPhamDefault.hinhAnh}
              style={{ width: "56%" }}
            />
          </div>
          <div className="col-8">
            <h3 className="font-weight-bold">Thông số kỹ thuật</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Màn Hình</th>
                  <th>{this.state.sanPhamDefault.manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{this.state.sanPhamDefault.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{this.state.sanPhamDefault.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{this.state.sanPhamDefault.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{this.state.sanPhamDefault.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{this.state.sanPhamDefault.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
