import React from 'react';
import '../css/Order.css';
import menu from '../../assets/Data.json';
import Swal from 'sweetalert2';
import axios from 'axios';
import {AiOutlineReload} from 'react-icons/ai';

function OrdersCard (props){
    let localArr = Object.keys(localStorage);
    const [menuArr, setMenuArr] = React.useState([])
    let result = menuArr;
    const [resArr, setResArr] = React.useState([]);
    const fallBackSrc = require('../../assets/images/bag.png');
    const [pageLoad, setPageLoad] = React.useState(false);
    var total = 0;
    var parr = [];

    const tryRequire = (path) => {
        try{
            return path
        }catch(err){
            console.log(err)
            console.log(typeof path)
        }
    }

    

    const getMenu = () =>{
        console.log(total)
        axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
            .then((response) => {
               setMenuArr(menuArr=>[
                   ...menuArr,
                   ...response.data
               ]);
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/appetizer/get")
            .then((response) => {
              setMenuArr(menuArr=>[
                  ...menuArr,
                  ...response.data
              ]);
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/desserts/get")
            .then((response) => {
                setMenuArr(menuArr=>[
                    ...menuArr,
                    ...response.data
                ]);
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/pizza/get")
            .then((response) => {
                setMenuArr(menuArr=>[
                    ...menuArr,
                    ...response.data
                ]);
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/pasta/get")
            .then((response) => {
                setMenuArr(menuArr=>[
                    ...menuArr,
                    ...response.data
                ]);
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/chicken/get")
            .then((response) => {
                setMenuArr(menuArr=>[
                    ...menuArr,
                    ...response.data
                ]);
        });
        menuArr.map((item, index) =>{
            localArr.filter(menu => menu === item.menuName).forEach((filtered) => {
                console.log(filtered);
                if(parseInt(localStorage.getItem(`${filtered}`) !== 0 && localStorage.getItem(`${filtered}`))){
                    result = result.concat({name:filtered,
                        folder:item.folder, 
                        qty: parseInt(localStorage.getItem(`${filtered}`)),
                        price: item.price
                    });
                }else{
                    return
                }
            })
        })
    }

    const loadHandler = () => {
        if(pageLoad === false){
            setPageLoad(true)
        }else{
            return null;
        }
    };

    React.useEffect(()=>{
        console.log(pageLoad);
        getMenu();
        setResArr(resArr=>[
            ...resArr,
            ...result
        ])
    }, [pageLoad])

    const onConfirm = () => {
        props.confirmHandler();
    }

    const removeHandler = (e) => {
        Swal.fire({
            title: 'Remove Item?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            customClass:{
                icon: 'swalertIcon'
            }
          }).then((result) => {
            if (result.isConfirmed) {
                const name = e.target.getAttribute("name")
                setResArr(resArr.filter(item=>item.name !==name));
                localStorage.removeItem(`${name}`)
              Swal.fire({
                    title: "Item Removed",
                    text: `${name} has been removed from your cart.`,
                    icon: 'success',
                    customClass:{
                    icon: 'swalertIcon'
                    }
              })
            }
          })
    }
    

    

    return(
        <div className = "ordersCard">
            <button 
            className='reStateButton'
            onClick={loadHandler}><AiOutlineReload/></button>
            <div className= "pagecontainer">
                <div className="orderData">
                    <div className="productInfo">
                        <h3>Your Orders</h3>
                        <div className='orderContainer'>
                            {resArr.length === 0 && <p style={{color:'black'}}> Your Cart is Empty. If you don't see your items, please click the <AiOutlineReload/> button.</p>}
                        {
                            
                            resArr.map((item, index) => {
                                    {
                                        if(item.name!==undefined){
                                            parr = parr.concat({
                                                name:item.name,
                                                quant:item.qty,
                                                price: item.price * item.qty
                                            })
                                        }else{
                                            return
                                        }localStorage.setItem("Order", JSON.stringify(parr))
                                    }
                                    return(
                                        
                                        item.qty > 0?
                                        (
                                            
                                            <div style={{
                                                display:'flex',
                                                alignItems:'center',
                                                justifyContent:'space-between',
                                                marginTop:'1vw',
                                                marginBottom:'1vw'
                                            }}>
                                               <div style={{
                                                   display:'flex',
                                                   alignItems:'center',
                                               }}>
                                                {
                                                    tryRequire(`../../assets/images/${item.folder}/${item.name}.jpg`)?
                                                    <img 
                                                        style={{
                                                            height:'7vw',
                                                            width:'7vw',
                                                            marginRight:'1vw',
                                                            border:'1px solid black'
                                                        }}
                                                        src={require(`../../assets/images/${item.folder}/${item.name}.jpg`)}
                                                    />
                                                    :
                                                    <img style={{
                                                        padding:'1vw',
                                                        height:'6vw',
                                                        width:'6vw',
                                                        marginRight:'1vw',
                                                        border:'1px solid black',
                                                    }}
                                                    src={fallBackSrc}/>
                                                }
                                                <p style={{
                                                    color:'black'
                                                }} key={index}>{item.name} <br/> x{item.qty} {item.price * item.qty}
                                                {localStorage.setItem("Total", total = total + item.price * item.qty)}

                                                </p>
                                               </div>
                                               <div className='orderButtonContainer'>
                                                   <button 
                                                   className='changeCount'
                                                   onClick={()=>{
                                                            localStorage.setItem(`${item.name}`, item.qty+1)
                                                            setResArr(oldArr => {
                                                            const newArr = [...oldArr];
                                                            newArr[index].qty = resArr[index].qty + 1;
                                                            return newArr;
                                                       })
                                                   }}
                                                   >+</button>
                                                   <button 
                                                   className='changeCount'
                                                   onClick={()=>{
                                                        if(item.qty-1 == 0){
                                                            Swal.fire({
                                                                title: 'Are you sure?',
                                                                text: "You won't be able to revert this!",
                                                                icon: 'warning',
                                                                showCancelButton: true,
                                                                confirmButtonColor: '#3085d6',
                                                                cancelButtonColor: '#d33',
                                                                confirmButtonText: 'Yes, delete it!',
                                                                customClass:{
                                                                    icon: 'swalertIcon'
                                                                }
                                                              }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    setResArr(oldArr => {
                                                                        const newArr = [...oldArr];
                                                                        newArr[index].qty = resArr[index].qty - 1;
                                                                        return newArr;
                                                                        })
                                                                    localStorage.removeItem(`${item.name}`)
                                                                  Swal.fire({
                                                                        title: "Item Removed",
                                                                        text: `${item.name} has been removed from your cart.`,
                                                                        icon: 'success',
                                                                        customClass:{
                                                                        icon: 'swalertIcon'
                                                                        }
                                                                  })
                                                                }
                                                              })
                                                        }else{
                                                            localStorage.setItem(`${item.name}`, parseInt(item.qty-1))
                                                            setResArr(oldArr => {
                                                                const newArr = [...oldArr];
                                                                newArr[index].qty = resArr[index].qty - 1;
                                                                return newArr;
                                                            })
                                                        }
                                                }}
                                                   >-</button>
                                                   <button 
                                                   name = {item.name}
                                                   className='removeItem'
                                                   onClick={removeHandler}
                                                   >x</button>
                                               </div>
                                            </div>
                                        ):localStorage.removeItem(`${item.name}`)
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
//         axios.get("https://ordering-system-database.herokuapp.com/api/appetizers/get")
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