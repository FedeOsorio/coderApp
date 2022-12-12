import { Item } from './Item';

export const ItemDetail = ({ item }) => {

    console.log(item);
    return (
        <div>
            {item.map(i => <Item key={i.id} {...i} />)}
        </div>
    )
}