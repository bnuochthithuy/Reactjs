import React, { Component } from 'react';
import ShowCart from "../ShowCart/ShowCart";
import {getData}from "../Data";
export default class Contents extends Component {
  render() {
    console.log(getData());
    const products = getData();
    return (
      <div>
        <div id="giay">
          <h2> Shoes </h2>
          <hr/>
          {/* use filter method  */}
          {products.filter(product => product.type == "giay").map(filteredProduct => (
            <ShowCart 
              name = {filteredProduct.name}
              img = {filteredProduct.img}
              price = {filteredProduct.prince}
              sale = {filteredProduct.sale}/>
          ))}
        </div>
        <div id = 'tui'>
          <h2> BAGS </h2>
          <hr/>
          {/* use filter method to choose type of bags and display it in the screen */}
          {products.filter(product => product.type == 'tui').map(filteredProduct =>(
            <ShowCart 
              name = {filteredProduct.name}
              img = {filteredProduct.img}
              price = {filteredProduct.prince}
              sale = {filteredProduct.sale}/>
          ))}

        </div>
      </div>
    )
  }
}
