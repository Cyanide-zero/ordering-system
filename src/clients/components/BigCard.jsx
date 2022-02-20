import React from "react";
import BigCardCss from '../css/BigCard.module.css';

const Card = (props) =>{
    return(
        <div className={BigCardCss.bigCard}>
            <img src={require(`../../assets/images/${props.folder}/${props.food}.jpg`)}/>
            <div className={BigCardCss.bottom}>
                <div className={BigCardCss.textContainer}>
                    <p className={BigCardCss.foodText}>{props.food}</p>
                    <p className={BigCardCss.priceText}>{props.price}</p>
                    <p className={BigCardCss.subText}>{props.sub}</p>
                </div>
                    <button className={BigCardCss.addButton}>+</button>
            </div>
        </div>
    )
}

export default Card;