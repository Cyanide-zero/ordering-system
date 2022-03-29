import React from 'react';
import { useTable } from 'react-table';
import OrderPageTable from '../components/orderpage-table';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import axios from 'axios'
function OrderPage(){

    const [arr,setArr] = React.useState([]);

    const getOrders = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/admin/orders")
            .then((response) => {
                  setArr(response.data);
        });
    }

    React.useEffect(() => {
        getOrders();
        console.log(arr)
    }, []);

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
            
            <div className="order-table">
                {/* <OrderPageTable></OrderPageTable> */}
                <table className='admintables'>
                    <thead>
                        <tr>
                            <th className='adminth'>ID</th>
                            <th className='adminth'>Invoice ID</th>
                            <th className='adminth'>Customer Name</th>
                            <th className='adminth'>Date Ordered</th>
                            <th className='adminth'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item, index)=> {
                                return(
                                    <tr>
                                        <td className='admintd'>{item.id}</td>
                                        <td className='admintd'>{item.invoice_id}</td>
                                        <td className='admintd'>{item.customername}</td>
                                        <td className='admintd'>{item.orderdate}</td>
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

export default OrderPage;