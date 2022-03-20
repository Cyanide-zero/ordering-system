import React from "react";
import BigCardCss from '../css/BigCard.module.css';
import axios from "axios";


const Card = (props) =>{
    const [count, setCount] = React.useState(0);
    const [cart,setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [added, setAdded] = React.useState(false);
    const setter = parseInt(localStorage.getItem("Total"));

    React.useEffect(()=>{
        console.log(total);
        if(!setter){
            localStorage.setItem("Total", total);
            setTotal(parseInt(localStorage.getItem("Total")));
        }else{
            setTotal(parseInt(localStorage.getItem("Total")));
        }
    })
    // galing local storage, pass to post, generate nalang galing db
    const handleClick = () =>{
        setCount(count+1)
        console.log(props.food, count+1);
        setAdded(true);
        localStorage.setItem(`${props.food}`, count)
            cart.map(items=>{
                if(total===0){
                    localStorage.setItem("Total", items.price)
                }
                else{
                    localStorage.setItem("Total", total+items.price)
                }              
            })
            setCart([
                ...cart,
                {
                    qty:count+1,
                    name:props.food,
                    price:props.price
                }
            ]);
    }

    

    return(
        <div className={BigCardCss.bigCard} style={props.styles}>
            <img src={require(`../../assets/images/${props.folder}/${props.food}.jpg`)}/>
            <div className={BigCardCss.bottom}>
                <div className={BigCardCss.textContainer}>
                    <p className={BigCardCss.foodText}>{props.food}</p>
                    <p className={BigCardCss.priceText}>&#8369;{props.price}</p>
                    <p className={BigCardCss.subText}>lorem ipsum</p>
                </div>
                {
                    added === true?
                        <button className={BigCardCss.addButton} onClick={handleClick}>+</button>
                    :(
                        <button className={BigCardCss.addButton} onClick={handleClick}>🛍</button>
                    )
                }
            </div>
        </div>
    )
}

export default Card;