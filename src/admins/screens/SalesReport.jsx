import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Swal from 'sweetalert2';

function SalesReport(){
    let history = useNavigate();
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const [arr, setArr] = React.useState([]);
    const [filteredArr, setFilteredArr] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    var total = 0;

    const getOrders = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/admin/orders")
            .then((response) => {
                  setArr(response.data);
        });
    }

    const redirect = () => {
        history.push("/DetailedSalesReport")
    }

    const filterDates = (e) =>{
        e.preventDefault();
        if(filteredArr){
            arr.map((data, index)=>{
                let date = new Date(data.orderdate.slice(0,10));
                let from = new Date(fromDate)
                let to = new Date(toDate)
                console.log(date.getTime(), from.getTime());    
                setFilteredArr(arr.filter((val)=>{
                    let date = new Date(val.orderdate.slice(0,10));
                    return date.getTime() >= from.getTime() && date.getTime() <= to.getTime()
                }))
            })
        }
        else{
            return (
            Swal.fire({
                title:'Filter Failed',
                text:'Invalid Date Range'
            }))
        }
        
        
            setOpenModal(true)
    }

    React.useEffect(() => {
        getOrders();
    },[]);

    console.log(filteredArr)

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
                                onChange={(e)=>{setFromDate(e.target.value)}}
                            />
                        
                        <label>TO DATE</label>
                            <input 
                                type="date" 
                                name="todate" 
                                onChange={(e)=>{setToDate(e.target.value)}}
                            />
                            <button className="submit-btn" onClick={filterDates}>CONFIRM</button>
                    </form>
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
                        <h2 className='modalTitle'>Orders made from {fromDate} to {toDate}</h2><br></br>
                        {
                            filteredArr.map((item, index)=>{
                                total = total + item.payment;
                                return(
                                    <div className='modalSalesContainer'>
                                        <p><b>{index+1}. id</b>:{item.id} &nbsp; <b>Invoice</b> {item.invoice_id}</p>
                                        <p><b>Ordered by</b>: {item.customername}</p>
                                        <p><b>Ordered with Address</b>: {item.customeraddress}</p>
                                        <p><b>Date Ordered</b>: {item.orderdate.slice(0,10)}</p>
                                        <p><b>Notes</b>: {item.notes}</p>
                                        <p><b>Payment</b>: ???{item.payment}.00</p>
                                        <p><b>Payment Method</b>: {item.customerpaid.toUpperCase()}</p>
                                        <p><b>Shipping Method</b>: {item.shipmethod.toUpperCase()}</p>
                                        <br></br>
                                    </div>
                                )
                            })
                        }
                        <h2><b>TOTAL SALES FROM {fromDate} to {toDate}: </b>???{total}.00</h2>
                        {/* <button onClick={()=>setOpenModal(false)}>Close</button> */}
                        </Modal>
                </div>
            </div>
        </div>
    );
}

export default SalesReport;