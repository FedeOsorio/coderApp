import { useContext } from 'react'
import { CartContext, useCartContext } from '../../context/CartContext'

export const CartItem = ({ product }) => {
    //const { removeProduct } = useContext(CartContext)

    const { removeProduct} = useCartContext();
    /* const handleRemove = (id) => {
         removeItem(id)
     }*/

    return (
        <>
            <div className='itemCart'>
                <img src={''} alt={product.title} />
                <div>
                    <p>Titulo: {product.title}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio u.: {product.price}</p>
                    <p>Subtotal: ${product.quantity*product.price}</p>
                    <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </>
    )
}