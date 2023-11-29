import React from 'react'
import './Item.css'


export const Item = ({ url, name, price }) => {
  return (
    <>
      <div className='containerItem'>
        <img src={url} />
        <h4>{name}</h4>
        <h4 className='priceItem'>${price}</h4>
      </div>
    </>
  )
}