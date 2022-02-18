import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function OrderPage(){
    return(
        <div className="orderpage">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                {/* Page Heading */}
                <div className="flex-container-header">
                    <h1>ORDERS</h1>
                    <form>
                        <input 
                            type="text"
                            name="search"
                            placeholder='Search'
                        />
                    </form>
                </div>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            </div>
        </div>
    );
}

export default OrderPage;