import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import { Link } from "react-router-dom";
import ProductTable from '../components/product-table';

function ProductManagement(){
    return(
        <div className="productmanagement">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <div className="flex-container-header">
                    <h1>PRODUCTS MANAGEMENT</h1>
                    <Link to="/admin/addproduct"><button className="add-btn">ADD PRODUCT</button></Link>
                </div>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
            <div className="product-table">
                <ProductTable></ProductTable>
            </div>
            </div>
        </div>
    );
}

export default ProductManagement;