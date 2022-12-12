import ItemCount from "./ItemCount";

export const Item = ({ name, id, title, img, precio, stock, desc }) => {

    console.log(name);
    console.log(id);
    console.log(title);
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
                <ItemCount stock={stock} />
            </div>
        </>
    )
}