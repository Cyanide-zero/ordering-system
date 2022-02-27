import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import ReservationTable from '../components/reservation-table';

function AdminReservation(){
    return(
        <div className="adminreservation">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <div className="flex-container-header">
                    <h1>TABLE RESERVATION</h1>
                    <form>
                        <input 
                            type="text"
                            name="search"
                            placeholder='Search'
                        />
                    </form>
                </div>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
                <div className="reservation-table">
                    <ReservationTable></ReservationTable>
                </div>
            </div>
        </div>
    );
}

export default AdminReservation;