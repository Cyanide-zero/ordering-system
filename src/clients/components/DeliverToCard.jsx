import React from 'react';
import '../css/Order.css';

function DeliverTo (){
    return(
        <div className = "deliverto">
            <div className= "pagecontainer">
                <form className="forms-container">
                    <div className="orderflex-container">
                        <div className="inside-flex">
                            <label>NAME</label>
                            <input
                                type="text"
                                className="customername"
                                name="CustomerName"
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="inside-flex">
                            <label>CONTACT NUMBER</label>
                            <input
                                type="text"
                                name="ContactNumber"
                                placeholder="Contact Number"
                                required
                            />
                        </div>
                    </div>
                    
                    <label>ADDRESS</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                    />

                    <label>ADDITIONAL NOTES</label>
                    <input
                        type="text"
                        name="AdditionalNotes"
                        placeholder="Put delivery instructions or directions here"
                        required
                    />

                    <button className="confirm-btn">CONFIRM</button>
                </form>
            </div>
        </div>
    );
}

export default DeliverTo;