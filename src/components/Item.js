import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/'+this.props.item.pict}></img>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.descr}</p>
        <b>{this.props.item.price}$</b>
        <div className='add__to__cart'>+</div>
      </div>
    )
  }
}

export default Item