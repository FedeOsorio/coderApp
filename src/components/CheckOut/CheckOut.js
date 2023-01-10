import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Swal from 'sweetalert2';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { clear } from '@testing-library/user-event/dist/clear';

export const CheckOut = (product) => {

    const { clearCart, totalPrice } = useCartContext();

    const order = {
        orden: {
            name: '{product.title}',
            total: '{ totalPrice }',
            cantidad: '{product.quantity',
            id: '{product.id}'
        }
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su compra ha sido realizada',
            text: 'Su número de orden es ' + id,
            showConfirmButton: false,
            timer: 3500
        }))
        clearCart()
    }

    return (
        <button className='btn' onClick={handleClick}>Pagar</button>
    )
}



