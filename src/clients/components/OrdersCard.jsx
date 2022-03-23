import React from 'react';
import '../css/Order.css';
import menu from '../../assets/Data.json'

function OrdersCard (props){
    let localArr = Object.keys(localStorage);
    let result = [];
    let [resArr, setResArr] = React.useState([]);

    const getResult = () => {
        menu.forEach((item, index) =>{
            localArr.filter(menu => menu === item.menuName).forEach((filtered) => {
                console.log(filtered);
                if(parseInt(localStorage.getItem(filtered)) !== 0){
                    result = result.concat(filtered);
                }else{
                    return
                }
            })
        })
    }

    const onConfirm = () => {
        props.confirmHandler();
    }

    React.useEffect(()=>{
        getResult();
        setResArr(resArr=>[
            ...resArr,
            ...result
        ])
    }, [])

    return(
        <div className = "ordersCard">
            <div className= "pagecontainer">
                <div className="orderData">
                    <div className="productInfo">
                        <h3>Your Orders</h3>
                        <div>
                        {
                            resArr.map((item, index) => {
                                    return(
                                        <p key={index}>{item}</p>
                                    )
                            })
                        }
                        </div>
                    </div>

                    
                </div>
                <hr></hr>
                <button className="confirm-btn" onClick={onConfirm}>CONFIRM</button>
            </div>
        </div>
    );
}

export default OrdersCard;

// const [tryArr, setTryArr] = React.useState([]);
//     const [localArr, setLocalArr] = React.useState([]);

//     const getMenu = () =>{
//         axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
//             .then((response) => {
//                setTryArr(tryArr => [
//                    ...tryArr,
//                    ...response.data
//                ])
//         });
//         axios.get("https://ordering-system-database.herokuapp.com/api/maindishes/get")
//             .then((response) => {
//                 setTryArr(tryArr => [
//                     ...tryArr,
//                     ...response.data
//                 ])
//         });
//         axios.get("https://ordering-system-database.herokuapp.com/api/desserts/get")
//             .then((response) => {
//                 setTryArr(tryArr => [
//                     ...tryArr,
//                     ...response.data
//                 ])
//         });
//         axios.get("https://ordering-system-database.herokuapp.com/api/pizza/get")
//             .then((response) => {
//                 setTryArr(tryArr => [
//                     ...tryArr,
//                     ...response.data
//                 ])
//         });
//     }
    


//     React.useEffect(()=>{
//         getMenu();
//         setLocalArr(Object.keys(localStorage))
//     }, [])

// tryArr.map((item, index) =>{
//     localArr.filter(menu => menu === item.menuName).map((filtered) => {
//         console.log(filtered);
//         return(
//             <p key={index}>{item.menuName}</p>
//         )
//     })
    
// })