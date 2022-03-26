import React from "react";
import BigCardCss from '../css/BigCard.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineShoppingCart } from "react-icons/ai";


const Card = (props) =>{
    const [count, setCount] = React.useState(0);
    const [cart,setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [added, setAdded] = React.useState(false);
    const setter = parseInt(localStorage.getItem("Total"));
    const notify = () => toast.success(`${props.food} has been added to your cart.`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

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
        if(added === true){
            notify()
        }
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
                        <button className={BigCardCss.addButton} onClick={handleClick}><AiOutlineShoppingCart/></button>
                    )
                }
                    <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    progressStyle={{
                        backgroundColor:'#FDD000'
                    }}
                    
                    />
            </div>
        </div>
    )
}

export default Card;