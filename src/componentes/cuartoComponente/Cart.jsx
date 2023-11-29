import React, { useState } from 'react';
import './Cart.css';

export const Cart = () => {

    const [texto, setTexto] = useState('');

    const onClickImg = () => {
        setTexto('Luis Fernando Heredia Forero')
    }

    return (
        <>
            <div className='containerImg'>
                <img onClick={ onClickImg } className='imgText' src="https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-ropa-diseno-plano_23-2149496415.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais" alt="" />
                <h1 className='nameText'>{texto}</h1>
            </div>
        </>
    )
}