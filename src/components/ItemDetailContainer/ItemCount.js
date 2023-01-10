import React from 'react'
import { useState } from 'react'

export const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial)

    const addCounter = () => {
        count < stock && setCount(count + 1)
    }

    const subtractCounter = () => {
        count > initial && setCount(count - 1)
    }
    /*

    const clickEventSum = () => {
        if (count < stock)
            setCount(count => count + 1)
    }

    const clickEventRest = () => {
        if (count > 0)
            setCount(count - 1)
    }
*/
    const [inStock, setStock] = useState(stock)

    const clickStockRest = () => {
        if (inStock > 0)
            setStock(inStock - count)
    }

    const cleanCart = () => {
        if (inStock < stock) {
            const resto = stock - inStock
            setStock(inStock + resto)
        }
    }

    return (
        <>
            <div className="btn-group">
                <button onClick={subtractCounter} className="btn">-</button>
                <span className='pl-3 pr-3 m-auto text-lg font-semibold'>     {"  "}  {count} {"   "}     </span>
                <button onClick={addCounter} className="btn">+</button>
                <button onClick={() => onAdd(count)} className='btn ml-2'>Agregar al carrito</button>
                <button onClick={cleanCart} className='btn ml-2'>Vaciar carrito</button>
            </div>
            <div>
                <button className='btn mt-5 ml-2'>Finalizar compra</button>
            </div>
        </>
    )
}
