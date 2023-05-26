import React, { useState } from 'react'
import { HiHomeModern } from "react-icons/hi2"
import Order from './Order';

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
                  <h3>Записатися на перегляд</h3>
                  {props.orders.map( el => (
                    <Order key={el.id} item={el} />
                  )

                  )}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
