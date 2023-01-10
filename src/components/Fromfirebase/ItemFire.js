import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore"

export const ItemFire = () => {
    const [item, setItem] = useState()
    const [items, setItems] = useState([])


    useEffect(() => {
        getItemData()
        getItems()
    }, [])

    const getItemData = () => {
        const db = getFirestore()
        const docRef = doc(db, 'items', 'qTFgMxT0V3eskkOtrXIL')
        getDoc(docRef).then(snapshot => {
            console.log({ id: snapshot.id, ...snapshot.data() });
            setItem({ id: snapshot.id, ...snapshot.data() });
        })
    }

    const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapshot = await getDocs(collectionRef)
        console.log(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }

    return (
        <div className="text-xl m-10">
            <h1>
                ItemList
            </h1>
            {item &&
                <>
                    <h2>Producto destacado</h2>
                    <p>{item.title} - stock: {item.stock}</p>
                </>
            }

            {items.map(i => <li key={i.id}>{i.title} - {i.price} - stock: {i.stock}</li>)}
        </div>
    )



}
