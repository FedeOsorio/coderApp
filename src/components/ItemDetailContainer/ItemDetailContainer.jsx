import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from '../../mock/products'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const { id } = useParams()

    const getItem = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000);
    })

    useEffect(() => {
        getItem()
            .then(products => setItem(products.filter(product => product.id == id)))
            .catch(error => console.log(error))
    }, [])

    return (
        <ItemDetail item={item} />
    )
}