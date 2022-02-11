import React from "react";
import { Link } from "react-router-dom";
import '../css/Sidebar.css'

function Sidebar(){
    return(
        <div className = "sidebar">
            <h1 className="sidebar-heading">WEB TITLE</h1>
            <div className="adminbutton-list">
                    <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/sales"><p>SALES REPORT</p></Link>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/order"><p>VIEW ORDERS</p></Link>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/products"><p>PRODUCT MANAGEMENT</p></Link>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/reservation"><p>RESERVATIONS</p></Link>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/account"><p>ACCOUNTS</p></Link>
                    <div className="hr"></div>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/profile"><p>PROFILE</p></Link>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/admin/settings"><p>SETTINGS</p></Link>
                     <Link style={{textDecoration:'none', color:"black", fontSize:"22px"}} to = "/"><p>LOGOUT</p></Link>
            </div>
        </div>
    );
}

export default Sidebar;