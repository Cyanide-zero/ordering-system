import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderStatusCSS from '../css/OrderStatus.module.css';
import {AiOutlineCreditCard, AiFillCheckCircle} from 'react-icons/ai';
import {BsTruck, BsAwardFill} from 'react-icons/bs';
import axios from 'axios';
import Swal from 'sweetalert2';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';



function OrderStatus(){
    const orderList = JSON.parse(localStorage.getItem("orderdetails"));
    const invoice = localStorage.getItem("orderinvoice");
    const status = localStorage.getItem("orderstatus");
    const address = localStorage.getItem("orderaddress");
    const  id = localStorage.getItem("orderid")
    let total = 0;

    const updateStatus = () =>{
        // console.log(id,status);
        Swal.fire({
            title: 'Confirm Order?',
            text: "Press 'Yes' only if you have received your order.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            customClass:{
                icon: OrderStatusCSS.swalertIcon
            }
          }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://ordering-system-database.herokuapp.com/api/admin/updateorder`,{
                    id : id,
                    status: "completed"
                }).then((response)=>{
                        localStorage.setItem("orderstatus", "completed")
                        Swal.fire({
                            icon: 'success',
                            title: 'Order Complete!',
                            text: 'Thank you for your order.',
                            customClass:{
                                icon:OrderStatusCSS.swalertIcon
                            }
                        }).then((response)=>{
                            window.location.reload();
                        })
                })
            }
          })
    }
    
    return(
        <div className={OrderStatusCSS.orderStatus}>
            <Header/>
                <div className={OrderStatusCSS.orderStatusContainer}>
                    <div className={OrderStatusCSS.orderHeader}>
                        <h1>ORDER STATUS</h1>
                        <div className={OrderStatusCSS.statuscontainer}>
                            {status==="pending"?<h3 className={OrderStatusCSS.status}>Waiting for Payment Approval</h3>:
                            status==="paid"?<h3 className={OrderStatusCSS.status}>Payment Approved</h3>:
                            status==="delivery"?<h3 className={OrderStatusCSS.status}>Your Order is On Its Way</h3>:
                            status==="completed"?<h3 className={OrderStatusCSS.status}>Order Completed, Thank You!</h3>:null}
                            <div className={OrderStatusCSS.invoiceNo}>
                                Invoice: {invoice}
                            </div>
                        </div>
                    </div>

                    <div className={OrderStatusCSS.headericons}>
                        <div className={OrderStatusCSS.icons}>
                            <AiOutlineCreditCard className={status==="pending"? OrderStatusCSS.iconTainerActive:OrderStatusCSS.iconTainer}/>-----
                            <AiFillCheckCircle className={status==="paid"? OrderStatusCSS.iconTainerActive:OrderStatusCSS.iconTainer}/>-----
                            <BsTruck  className={status==="delivery"? OrderStatusCSS.iconTainerActive:OrderStatusCSS.iconTainer}/>-----
                            <BsAwardFill className={status==="completed"? OrderStatusCSS.iconTainerActive:OrderStatusCSS.iconTainer}/>
                        </div>
                        {/* <button className={OrderStatusCSS.cancelbtn}>CANCEL</button> */}
                    </div>

                    <div className={OrderStatusCSS.orderscontainer}>
                        {
                            JSON.parse(orderList).map((item)=>{
                                total=total+item.price;
                                return(
                                    <div className={OrderStatusCSS.productcontainer}>
                                        <div className={OrderStatusCSS.quantity}>{item.quant}x</div>
                                        <div className={OrderStatusCSS.productname}>{item.name}</div>
                                    </div>
                                )
                            })
                        }
                        <hr style={{height: 1, color:'white', backgroundColor:'white'}}></hr>
                        <div className={OrderStatusCSS.totalcontainer}>
                            <p>TOTAL</p>
                            <div className={OrderStatusCSS.totalprice}>₱{total}.00</div>
                        </div>
                    </div>

                    <div className={OrderStatusCSS.addresscontainer}>
                            <div className={OrderStatusCSS.sender}>
                                <img className='locationIcon' src={require('../../assets/icons/location.png')} width="40" height="40"></img>
                                <div className={OrderStatusCSS.senderaddress}>MG UNLIWINGS & RAMSHAN'S CAFE</div>
                            </div>
                            <hr style={{height: 1, color:'white', backgroundColor:'white'}}></hr>
                            <div className={OrderStatusCSS.customer}>
                            <img className='locationIcon' src={require('../../assets/icons/location.png')} width="40" height="40"></img>
                                <div className={OrderStatusCSS.customeraddress}>{address}
                                {
                                    status==="delivery"?
                                    <button onClick={updateStatus} className={OrderStatusCSS.rcvdButton}>ORDER COMPLETE</button>
                                    :null
                                }
                                </div>
                                
                            </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default OrderStatus;