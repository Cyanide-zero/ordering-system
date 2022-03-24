import React from 'react';
import '../css/Order.css';
import menu from '../../assets/Data.json';
import Swal from 'sweetalert2';


function OrdersCard (props){
    let localArr = Object.keys(localStorage);
    let result = [];
    let [resArr, setResArr] = React.useState([]);

    const getResult = () => {
        menu.forEach((item, index) =>{
            localArr.filter(menu => menu === item.menuName).forEach((filtered) => {
                console.log(filtered);
                if(parseInt(localStorage.getItem(filtered)) !== 0){
                    result = result.concat({name:filtered,
                        folder:item.folder, 
                        qty: parseInt(localStorage.getItem(`${filtered}`)),
                        price: item.price
                    });
                    console.log(resArr)
                }else{
                    return
                }
            })
        })
    }

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
                        <div style={{
                            marginTop:'1vh',
                            backgroundColor:'#F2EFE2',
                            paddingLeft:'2vw',
                            paddingTop:'2vh',
                            paddingBottom:'2vh',
                            paddingRight:'2vh',
                            borderRadius:'1vw'
                        }}>
                            {resArr.length === 0 && <p style={{color:'black'}}> Your Cart is Empty</p>}
                        {
                            
                            resArr.map((item, index) => {
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
                                               <img 
                                                style={{
                                                    height:'7vw',
                                                    width:'7vw',
                                                    marginRight:'1vw',
                                                    border:'1px solid black'
                                                }}
                                                src={require(`../../assets/images/${item.folder}/${item.name}.jpg`)}/>
                                                <p style={{
                                                    color:'black'
                                                }} key={index}>{item.name} <br/> x{item.qty} {item.price * item.qty}</p>
                                               </div>
                                               <div style={{
                                                   display:'flex',
                                                   alignItems:'center',
                                                   width:'10vw',
                                                   justifyContent:'space-around'
                                               }}>
                                                   <button 
                                                   style={{
                                                       width:'2vw',
                                                       height:'2vw',
                                                       backgroundColor:'black',
                                                       color:'white',
                                                       border:'none',
                                                       borderRadius:'10px',
                                                       cursor:'pointer'
                                                   }}
                                                   onClick={()=>{
                                                            setResArr(oldArr => {
                                                            const newArr = [...oldArr];
                                                            newArr[index].qty = resArr[index].qty + 0.5;
                                                            return newArr;
                                                       })
                                                   }}
                                                   >+</button>
                                                   <button 
                                                   style={{
                                                       width:'2vw',
                                                       height:'2vw',
                                                       backgroundColor:'black',
                                                       color:'white',
                                                       border:'none',
                                                       borderRadius:'10px',
                                                       cursor:'pointer'
                                                   }}
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
                                                                        newArr[index].qty = resArr[index].qty - 0.5;
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
                                                            setResArr(oldArr => {
                                                                const newArr = [...oldArr];
                                                                newArr[index].qty = resArr[index].qty - 0.5;
                                                                return newArr;
                                                                })
                                                            localStorage.removeItem(`${item.name}`)
                                                        }
                                                }}
                                                   >-</button>
                                                   <button 
                                                   name = {item.name}
                                                   style={{
                                                       width:'2vw',
                                                       height:'2vw',
                                                       backgroundColor:'red',
                                                       color:'white',
                                                       border:'none',
                                                       borderRadius:'10px',
                                                       cursor:'pointer'
                                                   }}
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