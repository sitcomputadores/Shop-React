import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <>
      <div id="navbar">
        <ul className='UlNav'>
          <li className='LiNav'>
            Inicio
          </li>
          <li className='LiNav'>
            Inventario
          </li>
          <li className='LiNav'>
            Usuario
          </li>
          <li className='LiNav'>
            Cliente
          </li>
          <li className='LiNav'>
            Carrito
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
