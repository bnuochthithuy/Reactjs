import React, { Component } from 'react'

export default class ShowCart extends Component {
    message = () =>{
        alert ("thanks you for your order");
    }
  render() {
    return (
      <div>
        <div className='product' style={{display: "inline-block"}}>
            <div className='text'>
                <div className='p-img'>
                    <img src = {this.props.img} width={150} height={150}></img>
                    <div className='p-name'> {this.props.name}</div>
                    {/* nếu có sales thì hiện giá sales và gạch giá cũ */}
                    {(()=>{
                        if (this.props.sale != null){
                            return <div className='p-price'>
                                <strike> {this.props.price}</strike>{this.props.sale}
                            </div>
                        }
                        else{
                            return <div className='p-type'> {this.props.price}</div>
                        }
                    })}
                    <div> 
                        <button onClick={this.message}>
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}
