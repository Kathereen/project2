import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Агенція нерухомості</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Галерея</li>
                <li>Контакти</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
