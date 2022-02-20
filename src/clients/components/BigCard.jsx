import React from "react";
import BigCardCss from '../css/BigCard.module.css';

const Card = (props) =>{
    return(
        <div className={BigCardCss.bigCard} style={props.styles}>
            <img src={require(`../../assets/images/${props.folder}/${props.food}.jpg`)}/>
            <div className={BigCardCss.bottom}>
                <div className={BigCardCss.textContainer}>
                    <p className={BigCardCss.foodText}>{props.food}</p>
                    <p className={BigCardCss.priceText}>&#8369;{props.price}</p>
                    <p className={BigCardCss.subText}>lorem ipsum</p>
                </div>
                    <button className={BigCardCss.addButton}>+</button>
            </div>
        </div>
    )
}

export default Card;