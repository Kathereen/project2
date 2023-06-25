import React, { useState } from 'react'
import { HiHomeModern } from "react-icons/hi2"
import Order from './Order';

const showOrders = (props) => {
  return(<div>
    {props.orders.map( el =>(
    <Order onDelete={props.onDelete } key={el.id} item={el} />
  ))}
  </div>)
}

const showNothing = () =>{
  return(<div className='empty'>
    <h3>Записатися на перегляд</h3>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
   
  return (
    <header>
        <div>
            <span className='logo'>Агенція нерухомості</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Галерея</li>
                <li>Контакти</li>
            </ul>
            <HiHomeModern onClick={() => setCartOpen(cartOpen = !cartOpen)} className = {`cart__button__goAndSee ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='cart__opened'>
                  {props.orders.length > 0 ?
                    showOrders(props):showNothing ()
                    }
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
