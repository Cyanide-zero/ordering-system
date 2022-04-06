import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function AddProduct(){
    const [select, setSelect] = React.useState("pizza");
    const [productName, setProductName] = React.useState("");
    const [price, setPrice] = React.useState("");

    const productAddHandler = (e) => {
        console.log(select);
        e.preventDefault();
        Swal.fire({
            title: 'Verifying...',
            text: 'Please wait.',
            timer: 2000,
            didOpen: () => {
              Swal.showLoading();
              if(productName === ""){
                Swal.fire({
                    title: 'Process Failed',
                    text: 'Product name cannot be empty',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    customClass:{
                        icon: 'swalertIcon'
                    }
                })
            }else if(price === ""){
                Swal.fire({
                    title: 'Process Failed',
                    text: 'Price cannot be empty',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    customClass:{
                        icon: 'swalertIcon'
                    }
                })
            }
            else{
                if(select==="blendedsmoothies" || select==="handcrafted" || select==="hotbeverages"){
                    axios.post(`https://ordering-system-database.herokuapp.com/api/admin/drinksadd`, {
                    menuName: productName,
                    price: price,
                    folder:select
                }).then((response) => {
                    console.log(response)
                    if(!response.data.message){
                        Swal.fire({
                            title: 'Process Successful',
                            text: `${productName} has been successfully added.`,
                            icon: 'success',
                            customClass:{
                                icon: 'swalertIcon'
                            }
                        })
                    }
                    if(response.data.message){
                        Swal.fire({
                            title: 'Process Failed',
                            text: response.data.message,
                            icon: 'warning',
                            customClass:{
                                icon: 'swalertIcon'
                            }
                        })
                    }
                })
                }else{
                    axios.post(`https://ordering-system-database.herokuapp.com/api/admin/${select}add`, {
                        menuName: productName,
                        price: price
                    }).then((response) => {
                        console.log(response)
                        if(!response.data.message){
                            Swal.fire({
                                title: 'Process Successful',
                                text: `${productName} has been successfully added.`,
                                icon: 'success',
                                confirmButtonText: 'OK',
                                customClass:{
                                    icon: 'swalertIcon'
                                }
                            }).then((result)=>{
                                if (result.isConfirmed) {
                                    window.location.reload();
                                }else{
                                    window.location.reload();
                                }
                            })
                        }
                        if(response.data.message){
                            Swal.fire({
                                title: 'Process Failed',
                                text: response.data.message,
                                icon: 'warning',
                                customClass:{
                                    icon: 'swalertIcon'
                                }
                            })
                    }
                })
                }
            }
            }
        })
        
    }

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
                            onChange={(e) => setProductName(e.target.value)}
                        />

                        <div className="flex-container-form">
                            <div className="inside-flex">
                                <label>CATEGORY</label>
                                <select value={select} onChange={(e) => setSelect(e.target.value)} className="category-form">
                                    <option value="pizza">Pizza</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="pasta">Pasta</option>
                                    <option value="appetizer">Appetizer</option>
                                    <option value="blendedsmoothies">Drinks - Blended Smoothies</option>
                                    <option value="handcrafted">Drinks - Hand Crafted</option>
                                    <option value="hotbeverages">Drinks - Hot Beverages</option>
                                </select>
                            </div>

                            <div className="inside-flex">
                                <label>PRODUCT PRICE</label>
                                <input
                                    type="number"
                                    className="price-form"
                                    name="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            {/* <div className="inside-flex">
                                <label>QUANTITY</label>
                                <input
                                    type="number"
                                    className="quantity-form"
                                    name="quantity"
                                />
                            </div> */}
                        </div>
                        

                        {/* <label>PRODUCT IMAGE</label>
                            <input 
                                type="file"
                                className="image-form"
                                required 
                        /> */}

                        
                        {/* <label>PRODUCT DESCRIPTION</label>
                        <textarea className="description"></textarea> */}

                        <div className="form-buttons">
                            <button className="cancel-btn">CLEAR</button>
                            <button onClick={productAddHandler} className="save-btn">SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;