import React from 'react';
import { useTable } from 'react-table';
import OrderPageTable from '../components/orderpage-table';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import axios from 'axios'
import Swal from 'sweetalert2'
import Modal from 'react-modal'

function OrderPage(){

    const [arr,setArr] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false)
    const getOrders = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/admin/orders")
            .then((response) => {
                  setArr(response.data);
        });
    }

    const deleteOrder = (id) => {
        axios.delete(`https://ordering-system-database.herokuapp.com/api/admin/orderdelete/${id}`)
        .then((response)=>{
            setArr(arr.filter((val)=>{
                return val.id != id
            }))
        })
    }

    React.useEffect(() => {
        getOrders();
        console.log("Array: ", arr)
    }, []);

    return(
        <div className="orderpage">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                {/* Page Heading */}
                <div className="flex-container-header">
                    <h1>ORDERS</h1>
                    {/* <form>
                        <input 
                            type="text"
                            name="search"
                            placeholder='Search'
                        />
                    </form> */}
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
                                if(!openModal){
                                    localStorage.setItem("Order", JSON.stringify([]))
                                }
                                let dataj = JSON.parse(item.orderdetails)
                                let datad = JSON.parse(localStorage.getItem("Order"))
                                let total = 0;
                                return(
                                    <tr key={index}>
                                        <Modal style={{
                                            overlay:{
                                                backgroundColor:'rgba(0, 0, 0, 0.1)'
                                            },
                                            content:{
                                                height:'50vh',
                                                width:'50vw',
                                                position:'absolute',
                                                top:'20vh',
                                                left:'25vw',
                                            }
                                        }} isOpen={openModal} onRequestClose={()=>setOpenModal(false)}>
                                            <h1 className='modalTitle'>ORDER {localStorage.getItem("ID")}</h1>
                                            <p>Ordered by: {localStorage.getItem("Name")}</p>
                                            <p>Deliver to: {localStorage.getItem("Address")}</p>
                                            <br></br><p>Orders:</p>
                                                {
                                                    datad.map((order, index)=>{
                                                        {total=total+order.price}
                                                        return (
                                                            <div>
                                                                <p>{index+ 1} {order.name} x{order.quant}</p>
                                                                <p>₱{order.price}.00</p>
                                                            </div>
                                                        )
                                                    })
                                                }<br/>
                                            <p>Notes: {item.notes}</p><br/>
                                            <p>Total: ₱{total}</p><br/>
                                            <p>Payment Method: {item.customerpaid.toUpperCase()}</p>
                                            {/* <button onClick={()=>setOpenModal(false)}>Close</button> */}
                                        </Modal>
                                        <td className='admintd'>{index+1}</td>
                                        <td className='admintd'>{item.invoice_id}</td>
                                        <td className='admintd'>{item.customername}</td>
                                        <td className='admintd'>{item.orderdate.slice(0,10)}</td>
                                        <td className='admintd'><button
                                        className='orderViewButton'
                                        onClick={()=>{
                                            setOpenModal(true);
                                            localStorage.setItem("Order", JSON.stringify(dataj))
                                            localStorage.setItem("ID", item.invoice_id)
                                            localStorage.setItem("Name", item.customername);
                                            localStorage.setItem("Address", item.customeraddress)
                                        }}
                                        > 👁 </button>  &nbsp;|&nbsp;   <button onClick={()=>{deleteOrder(item.id)}} className='orderDeleteButton'> ✖ </button></td>
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