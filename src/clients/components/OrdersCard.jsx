import React from 'react';
import '../css/Order.css';

function OrdersCard (){
    return(
        <div className = "ordersCard">
            <div className= "pagecontainer">
                <div className="orderData">
                    <div className="productInfo">
                        <h3>Lorem Ipsum</h3>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>

                    
                </div>
                <hr></hr>
                <button className="confirm-btn">CONFIRM</button>
            </div>
        </div>
    );
}

export default OrdersCard;