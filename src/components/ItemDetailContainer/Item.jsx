import { useCartContext } from '../../context/CartContext';
import { ItemCount } from "./ItemCount";

export const Item = ({ name, id, title, img, precio, stock, desc }) => {

    const { addNewProduct } = useCartContext()

    const onAdd = (quantity) => {
        const newProduct = {name, id, stock, quantity, precio, img}
        addNewProduct(newProduct)
    }
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl text ">
                <img className='w-72 m-auto' src={img} />
                <div>{title}</div>
                <div className="text-justify mt-2 ml-6 mr-6">{desc}</div>
                <div className='cardPrice'>${precio}</div>
                <div>Cantidad de stock: {stock}</div>
            </div>
            <div>
                <br></br>
            </div>
            <div>
                <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            </div>
        </>
    )
}