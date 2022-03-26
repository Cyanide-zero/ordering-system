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
                <table style={{ marginLeft:'3vw',borderCollapse: 'collapse', width: '65vw', marginTop: '25px' }}>
                    <thead>
                        <tr>
                            <th style={{
                                border: 'solid 1px black',
                                color: 'black',
                                fontWeight: 'bold',
                                padding: '10px 15px',
                                }}>ID</th>
                            <th
                            style={{
                                border: 'solid 1px black',
                                color: 'black',
                                fontWeight: 'bold',
                                padding: '10px 15px',
                              }}
                            >Product Name</th>
                            <th
                            style={{
                                border: 'solid 1px black',
                                color: 'black',
                                fontWeight: 'bold',
                                padding: '10px 15px',
                              }}
                            >Product Price</th>
                            <th
                            style={{
                                border: 'solid 1px black',
                                color: 'black',
                                fontWeight: 'bold',
                                padding: '10px 15px',
                              }}
                            >Date Created</th>
                            <th
                            style={{
                                border: 'solid 1px black',
                                color: 'black',
                                fontWeight: 'bold',
                                padding: '10px 15px',
                              }}
                            >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item,index) =>{
                                return(
                                    <tr>
                                        <td
                                        style={{
                                            padding: '8px 25px',
                                            border: 'solid 1px gray',
                                            textAlign: 'center',
                                          }}
                                        >{index+1}
                                        </td>
                                        <td
                                        style={{
                                            padding: '8px 25px',
                                            border: 'solid 1px gray',
                                            textAlign: 'center',
                                          }}
                                        >{item.menuName}</td>
                                        <td
                                        style={{
                                            padding: '8px 25px',
                                            border: 'solid 1px gray',
                                            textAlign: 'center',
                                          }}
                                        >{item.price}</td>
                                        <td
                                        style={{
                                            padding: '8px 25px',
                                            border: 'solid 1px gray',
                                            textAlign: 'center',
                                          }}
                                        ></td>
                                        <td
                                        style={{
                                            padding: '8px 25px',
                                            border: 'solid 1px gray',
                                            textAlign: 'center',
                                          }}
                                        ></td>
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