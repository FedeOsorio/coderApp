import { useContext } from 'react'
import { CartContext, useCartContext } from '../../context/CartContext'
import { ItemFire } from '../Fromfirebase/ItemFire';
import './Cart.css';

export const CartItem = ({ product }) => {

    const { deleteProduct } = useCartContext();

    return (
        <>
            <div className='CartItem'>
                <img src={product.img}></img>
                <div>
                    <br></br>
                    <br></br>
                    <p><strong>Titulo:</strong> {product.name}</p>
                    <p><strong>Cantidad:</strong> {product.quantity}</p>
                    <p><strong>Precio u.:</strong> ${product.precio}</p>
                    <p><strong>Subtotal:</strong> ${product.quantity * product.precio}</p>
                </div>
                <div>  <button className='btn mt-20 ml-5 ' onClick={() => deleteProduct(product.id)}>X</button></div>
            </div>
        </>
    )
}