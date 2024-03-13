import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Carousel} from "./Carousel";
import "../styles/ModalCard.css";

export const ModalCard = (props) => {
    return (
        <div className="modal-window">
            <div className="full-item">
                <FontAwesomeIcon icon={faXmark} className="exit-button" onClick={() => props.onShowModal(props.item)}/>
                <Carousel photos={props.item.images}/>
                <h2 className="full-item-name">{props.item.title}</h2>
                <p className="full-item-brand">{props.item.brand}</p>
                <p className="full-item-desc">{props.item.description}</p>
                <p className="full-item-price">{props.item.price}$</p>
            </div>
        </div>
    )
}
