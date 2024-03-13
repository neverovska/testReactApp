import React from "react";
import {Item} from "./Item";
import "../styles/ItemList.css";

export const ItemsList = (props) => {
    return (
        <div className="item-list">
            {props.items.slice(props.page * props.count - props.count, props.page * props.count).map(el => (
                <Item onShowModal={props.onShowModal} key={el.id} item={el}/>
            ))}
        </div>
    )
}
