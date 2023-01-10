import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../mock/products'
import { ItemFire } from '../Fromfirebase/ItemFire'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

  const [item, setItem] = useState()
  const [items, setItems] = useState([])


  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    const snapshot = await getDocs(collectionRef)
    console.log(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
  }

  return (
    <>
      <ItemList productList={items} />
    </>
  )

}
  /*
const [productList, setProductList] = useState([])

const { idCategory } = useParams()
 
const getProducts = () => new Promise((resolve, reject) => {
setTimeout(() => resolve(products), 1500);
})

useEffect(() => {

if (idCategory) {
getProducts()
.then(products => setProductList(products.filter(product => product.category === idCategory)))
.catch(error => console.log(error))
} else {
getProducts()
.then(products => setProductList(products))
.catch(error => console.log(error))
}

}, [idCategory])

return (
<ItemList productList={productList} />
)
}*/

