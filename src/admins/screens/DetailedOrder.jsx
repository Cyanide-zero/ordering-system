import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function DetailedOrder(){
    return(
        <div className="orderdetailspage">
            <Sidebar></Sidebar>

            <div className="pagecontent">
                {/* Page heading */}
                <div className="flex-container-header">
                    <h1>ORDER</h1>
                    <div className="header-buttons">
                        <button className="cancelbtn">CANCEL ORDER</button>
                        <button className="confirm-order-btn">CONFIRM ORDER</button>
                    </div>  
                </div>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
                
                {/* Page body */}
                <div className="orderdetails">
                    <h2>INVOICE #</h2>

                    <div className="order-tracker">
                        <h3>Lorem Ipsum</h3>
                        <p>lorem ipsum dolor...</p>
                    </div>

                    <div className="customer-details-container">

                    </div>

                    <div className="orders-info-container">

                    </div>

                    <div className="payment-info-container">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedOrder;