import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial)

    const { clearCart } = useCartContext();

    const addCounter = () => {
        count < stock && setCount(count + 1)
    }

    const subtractCounter = () => {
        count > initial && setCount(count - 1)
    }

    return (
        <>
            <div className="btn-group">
                <button onClick={subtractCounter} className="btn">-</button>
                <span className='pl-3 pr-3 m-auto text-lg font-semibold'>     {"  "}  {count} {"   "}     </span>
                <button onClick={addCounter} className="btn">+</button>
                <button onClick={() => onAdd(count)} className='btn ml-2'>Agregar al carrito</button>
                <button onClick={clearCart} className='btn ml-2'>Vaciar carrito</button>
            </div>
            <div>
                <Link to='/cart'>
                    <button className='btn mt-5 ml-2'>Finalizar compra</button>
                </Link>
            </div>
        </>
    )
}
