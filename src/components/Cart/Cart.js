import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


//PARA LA PROXIMA

export const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    )
  }



  return (
    <div>

    </div >
  )
}
/*
//import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className='Button2'>Realizar pedido</Link>
        </div>
    )
}

export default Cart*/