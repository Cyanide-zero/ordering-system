import React from 'react';
import '../css/Order.css';

function PaymentCard (){
    return(
        <div className = "PaymentCard">
            <div className= "pagecontainer">
                <forms className="forms-container">
                    <label>PAYMENT</label>
                    <select className="category-form">
                        <option value="gcash">GCASH</option>
                        <option value="bdo">BDO</option>
                    </select>

                    <label>SEND TO</label>
                    <input
                        type="text"
                        name="accountdetails"
                        disabled={true}
                    />

                    <label>PAYMENT PROOF</label>
                    <input
                        type="image"
                        name="paymentproof"
                        required
                    />
                </forms>
                <button className="confirm-btn">CONFIRM</button>
            </div>
        </div>
    );
}

export default PaymentCard;