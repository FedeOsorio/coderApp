import { ItemCard } from "../Card/ItemCard"

export const ItemList = ({productList}) => {

    return (
        <div>
            {
            productList.map(i => <ItemCard key={i.id} {...i}/>)
            }
        </div>
    )
}