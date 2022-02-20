import React from "react";
import Item from './Item';
import './main.css'

const Main = (props) => {
    const { items, onAdd } = props;
    return (
        <main className="block col-2">
            <h2>Items</h2>
            <hr />
            <div className="item">
                {items.map((item) =>(
                    <Item key={item.id} item={item} onAdd={onAdd}></Item>
                ))}
            </div>
        </main>

    );
}

export default Main;