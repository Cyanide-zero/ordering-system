import React from 'react';
import '../css/Order.css';
import axios from 'axios';

function OrdersCard (){
    const [tryArr, setTryArr] = React.useState([]);
    const [localArr, setLocalArr] = React.useState([]);
    const [result, setResult] = React.useState([]); 

    const getMenu = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
            .then((response) => {
               setTryArr(tryArr => [
                   ...tryArr,
                   ...response.data
               ])
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/maindishes/get")
            .then((response) => {
                setTryArr(tryArr => [
                    ...tryArr,
                    ...response.data
                ])
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/desserts/get")
            .then((response) => {
                setTryArr(tryArr => [
                    ...tryArr,
                    ...response.data
                ])
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/pizza/get")
            .then((response) => {
                setTryArr(tryArr => [
                    ...tryArr,
                    ...response.data
                ])
        });
    }
    


    React.useEffect(()=>{
        getMenu();
        setLocalArr(Object.keys(localStorage))
    }, [])
    return(
        <div className = "ordersCard">
            <div className= "pagecontainer">
                <div className="orderData">
                    <div className="productInfo">
                        <h3>Your Orders</h3>
                        {
                            tryArr.map((item, index) =>{
                                localArr.filter(menu => menu === item.menuName).map((filtered) => {
                                    console.log(filtered)
                                    return(
                                        <p key={index}>{filtered}</p>
                                    )
                                })
                            })
                        }
                    </div>

                    
                </div>
                <hr></hr>
                <button className="confirm-btn">CONFIRM</button>
            </div>
        </div>
    );
}

export default OrdersCard;