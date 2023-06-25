import React, { Component } from 'react'
import { TiTimesOutline } from "react-icons/ti"

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/'+this.props.item.pict}></img>
        <h2>{this.props.item.name}</h2>
        <b>{this.props.item.price}$</b>
        <TiTimesOutline className='delete__icon' onClick={()=>{this.props.onDelete(this.props.item.id)}}/>
      </div>
    )
  }
}

export default Order