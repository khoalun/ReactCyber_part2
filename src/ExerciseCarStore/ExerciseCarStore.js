import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", img: "./img/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver car",
      img: "./img/silver-car.jpg",
      price: 3000,
    },
    {
      id: 3,
      name: "Steel car",
      img: "./img/steel-car.jpg",
      price: 4000,
    },
  ];

  state = {
    modalDefault: {
      id: 1,
      name: "black car",
      img: "./img/black-car.jpg",
      price: 1000,
    },
    };
    changeState = (newModal) => {
        this.setState({
           modalDefault :newModal
       })
   }

  render() {
    return (
      <div>
        <h3 className="display-4 text-center"> Car List</h3>
        <ProductList productsData={this.products} changeData={this.changeState} />
        <Modal content={this.state.modalDefault}/>
      </div>
    );
  }
}
