import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                key: 'all',
                name: 'Всі квартири'
                },

                {
                    key: '1-кімнатні квартири',
                    name: 'Однокімнатні'
                },

                {
                    key: '2-кімнатні квартири',
                    name: 'Двокімнатні'
                },

                {
                    key: '3-кімнатні і більше',
                    name: 'Апартаменти'
                },
                {
                    key: 'будинки',
                    name: 'Будинки'
                },
                {
                    key: 'ділянки',
                    name: 'Земельні ділянки'
                },
        ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
