import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import ItemCount from '../ItemDetailContainer/ItemCount'

export const ItemCard = ({ id, title, name, img, precio, stock, idCategory }) => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <h3 className="font-semibold">{title}</h3>
            <img className='' src={img} />
            <div>{name}</div>
            <div className='cardPrice'>${precio}</div>
            <div>Cantidad de stock: {stock}</div>
            <Link to={`/item/${id}`}>
                <button className='btn'> Ver más detalles </button>
            </Link>
        </div>
    )
}
