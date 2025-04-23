import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(props){
        super(props);
        this.state =
         {
            filed: {
                name : 'nguyen van teo',
                age : 29
            }
        }
    };
    
  render() {
    return (
      <div>
        <h1> your name: {this.state.filed.name}</h1>
        <h1> your name: {this.state.filed.age}</h1>
      </div>
    )
  }
}
