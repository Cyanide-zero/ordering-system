import React from "react";
import '../css/BigCard.css';

const Card = (props) =>{
    return(
        <div className="big-card">
            <a></a>
            <div className="bottom">
                <div className="textcontainer">
                    <p className="foodtext">{props.food}</p>
                    <p className="subtext">{props.sub}</p>
                </div>
                    <button class="addbutton">+</button>
            </div>
        </div>
    )
}

export default Card;