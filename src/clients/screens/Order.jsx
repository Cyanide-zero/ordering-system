import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Order.css';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeliverTo from '../components/DeliverToCard';
import OrdersCard from '../components/OrdersCard';
import PaymentCard from '../components/PaymentCard';

function Order(){
    const [data,setData] = useState({
        deliverTo:true,
        orders:false,
        payment:false,
    })
    
    return(
        <div className="order">
            <Header/>
                <div className="ordercontainer">
                    <div className="orderheader">
                        <h1>ORDER SUMMARY</h1>
                        <div className='headerbuttons'>
                            <button
                            onClick={() => setData({
                                ...data,
                                deliverTo:true,
                                orders:false,
                                payment:false
                            })}
                            className={data.deliverTo?"orderButtonActive":"orderButton"}>DELIVER TO</button>
                            <button
                            onClick={() => setData({
                                ...data,
                                deliverTo:false,
                                orders:true,
                                payment:false
                            })}
                            className={data.orders?"orderButtonActive":"orderButton"}>ORDERS</button>
                            <button
                            onClick={() => setData({
                                ...data,
                                deliverTo:false,
                                orders:false,
                                payment:true
                            })}
                            className={data.payment?"orderButtonActive":"orderButton"}>PAYMENT</button>
                        </div>
                    </div>
                    
                    {data.deliverTo && <DeliverTo/>}
                    {data.orders && <OrdersCard/>}
                    {data.payment && <PaymentCard/>}
                </div>
            <Footer/>
        </div>
    );
}

export default Order;