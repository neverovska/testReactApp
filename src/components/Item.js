import React from "react";
import "../styles/Item.css";

export const Item = (props) => {
    return (
        <article className="item" onClick={() => props.onShowModal(props.item)}>
            <img src={props.item.thumbnail} alt={props.item.title}/>
            <div className="item-container">
                <h2 className="item-name">{props.item.title}</h2>
                <p className="item-price">{props.item.price}$</p>
            </div>
        </article>
    )
}
