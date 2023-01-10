import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { CheckOut } from '../CheckOut/CheckOut'

export const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <br></br>
        <p className='text-xl'>No hay elementos en el carrito</p>
        <br></br>
        <Link to='/'>
          <button className='btn'>Hacer compras</button></Link>
      </>
    )
  }

  return (
    <>
      <div>
        {cart.map(product => <CartItem key={product.id} product={product} />)}
      </div >
     
      <p>
        <strong>Precio total:</strong> ${totalPrice()}
      </p>
      <br></br>
      <CheckOut />
    </>
  )
}