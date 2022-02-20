import React from "react";
import './item.css'

const Item = {props}=>{
    const { item, onAdd } = props;
    return (
        <div className="itemdiv">
            <img className="small" src="{item.image}" alt="item.name" />
            <h3>{item.name}</h3>
            <div>₹ {product.price}.00</div>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>

    );
}

export default Item;
