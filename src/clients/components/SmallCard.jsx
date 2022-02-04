import React from "react";
import '../../css/SmallCard.css';

const Card = (props) =>{
    return(
        <div className="small-card">
            <a></a>
            <p style={{wordBreak:'break-word'}}>{props.food}</p>
        </div>
    )
}

export default Card;