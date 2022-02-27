import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Order.css';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeliverTo from '../components/DeliverToCard';
import OrdersCard from '../components/OrdersCard';
import PaymentCard from '../components/PaymentCard';

function Order(){
    return(
        <div className="order">
            <Header/>
                <div className="ordercontainer">
                    <div className="orderheader">
                        <h1>ORDER SUMMARY</h1>
                        <div className = "headerbuttons">
                            <Link style={{textDecoration:'none', color: 'black'}} to ="/">DELIVER TO</Link>
                            <Link style={{textDecoration:'none', color: 'black'}} to ="/">ORDERS</Link>
                            <Link style={{textDecoration:'none', color: 'black'}} to ="/">PAYMENT</Link>
                        </div>
                    </div>
                    
                    <DeliverTo/>
                    <OrdersCard/>
                    <PaymentCard/>
                </div>
            <Footer/>
        </div>
    );
}

export default Order;