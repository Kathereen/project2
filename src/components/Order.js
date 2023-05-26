import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/'+this.props.item.pict}></img>
        <h2>{this.props.item.name}</h2>
        <b>{this.props.item.price}$</b>
      </div>
    )
  }
}

export default Order