import React, {useEffect} from "react";
import BigCardCss from '../css/BigCard.module.css';
import axios from "axios";


const Card = (props) =>{

    // useEffect(()=>{
    //     axios.get("http://localhost:5000/")
    //         .then((response) => {
    //             let i = 0;
    //             for (i=0; i < response.data.length; i++){}
    //         })
    // }, []);

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