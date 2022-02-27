import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function AddProduct(){
    return(
        <div className="addproduct">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <h1>ADD PRODUCT</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
                <div className="add-content">
                    <form className="add-product-forms">
                        <label>PRODUCT NAME</label>
                        <input 
                            type="text"
                            name="product-name"
                            required
                        />

                        <div className="flex-container-form">
                            <div className="inside-flex">
                                <label>CATEGORY</label>
                                <select className="category-form">
                                    <option value="pizza">Pizza</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="maindishes">Main Dishes</option>
                                </select>
                            </div>

                            <div className="inside-flex">
                                <label>PRODUCT PRICE</label>
                                <input
                                    type="number"
                                    className="price-form"
                                    name="price"
                                    required 
                                />
                            </div>

                            <div className="inside-flex">
                                <label>QUANTITY</label>
                                <input
                                    type="number"
                                    className="quantity-form"
                                    name="quantity"
                                />
                            </div>
                        </div>
                        

                        <label>PRODUCT IMAGE</label>
                            <input 
                                type="file"
                                className="image-form"
                                required 
                        />

                        
                        <label>PRODUCT DESCRIPTION</label>
                        <textarea className="description"></textarea>

                        <div className="form-buttons">
                            <button className="cancel-btn">CANCEL</button>
                            <button className="save-btn">SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;