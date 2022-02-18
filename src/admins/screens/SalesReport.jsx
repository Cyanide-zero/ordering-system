import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import { useNavigate } from 'react-router-dom';


function SalesReport(){
    let history = useNavigate();

    const redirect = () => {
        history.push("/DetailedSalesReport")
    }

    return(
        <div className="salesreport">
            <Sidebar></Sidebar>

            <div className="pagecontent">
                {/* Page heading */}
                <h1>SALES REPORT</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
                
                {/* Page body */}
                <div className="sales-content">
                    <form className='sales-form'>
                        <label>FROM DATE</label>
                            <input 
                                type="date" 
                                name="fromdate"
                                required
                            />
                        
                        <label>TO DATE</label>
                            <input 
                                type="date" 
                                name="todate" 
                                required
                            />
                            <button className="submit-btn" onSubmit={redirect}>CONFIRM</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SalesReport;