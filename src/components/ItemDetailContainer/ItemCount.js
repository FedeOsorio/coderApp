import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(0)

    const clickEventSum = () => {
        if (count < stock)
            setCount(count => count + 1)
    }

    const clickEventRest = () => {
        if (count > 0) 
            setCount(count - 1)
    }

    return (
        <div className="btn-group">
            <button onClick={clickEventRest} className="btn">-</button>
            <span className='pl-3 pr-3 m-auto text-lg font-semibold'>     {"  "}  {count} {"   "}     </span>
            <button onClick={clickEventSum} className="btn">+</button>
            <button className='btn ml-2'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount