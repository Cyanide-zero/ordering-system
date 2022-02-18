import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function DetailedSalesReport(){
    return(
        <div className="salesreport">
            <Sidebar></Sidebar>

            <div className="pagecontent">
                {/* Page heading */}
                <h1>SALES REPORT FROM N TO N</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
                
                {/* Page body */}
                <div className="selected-sales-content">
                    
                </div>
            </div>
        </div>
    );
}

export default DetailedSalesReport;