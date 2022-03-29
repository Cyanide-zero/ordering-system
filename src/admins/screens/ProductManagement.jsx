import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import { Link } from "react-router-dom";
// import ProductTable from '../components/product-table';
import axios from 'axios';

function ProductManagement(){
    const [arr,setArr] = React.useState([]);

  React.useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = () =>{
      axios.get("https://ordering-system-database.herokuapp.com/api/admin/getproduct")
          .then((response) => {
                setArr(response.data);
      });
  }

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
                {/* <ProductTable></ProductTable> */}
                <table className='admintables'>
                    <thead>
                        <tr>
                            <th className='adminth'>ID</th>
                            <th className='adminth'>Product Name</th>
                            <th className='adminth'>Product Price</th>
                            <th className='adminth'>Date Created</th>
                            <th className='adminth'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item,index) =>{
                                return(
                                    <tr>
                                        <td className='admintd'>{index+1}</td>
                                        <td className='admintd'>{item.menuName}</td>
                                        <td className='admintd'>{item.price}</td>
                                        <td className='admintd'></td>
                                        <td className='admintd'></td>
                                    </tr>
                                )
                               })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default ProductManagement;