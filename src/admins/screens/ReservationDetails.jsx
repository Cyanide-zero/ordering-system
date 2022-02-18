import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function ReservationDetails(){
    return(
        <div className="reservationdetails">
            <Sidebar></Sidebar>

            <div className="pagecontent">
                {/* Page heading */}
                <div className="flex-container-header">
                    <h1>TABLE RESERVATION</h1>
                    <div className="header-buttons">
                        <button className="cancelbtn">CANCEL RESERVATION</button>
                        <button className="confirm-order-btn">CONFIRM RESERVATION</button>
                    </div>  
                </div>

                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
                
                {/* Page body */}
                <div className="reservation-details-content">
                    <div className="reservation-details-container">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationDetails;