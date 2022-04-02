import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import ReservationCard from '../components/reservationcard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminReservations(){

    const [arr,setArr] = React.useState([]);
    const [isReserved,setIsReserved] = React.useState(false);
    const [idReser,setidReser] = React.useState(0);
    const [change,setChange] = React.useState(0);
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [size, setSize] = React.useState(0);
    const [name, setName] = React.useState("");
    const [email,setEmail] = React.useState("");

    React.useEffect(() => {
        setDate(localStorage.getItem("date"));
        setSize(localStorage.getItem("size"));
        setTime(localStorage.getItem("time"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"))
        getReservations();
        console.log(arr)
        console.log(change)
    }, []);

    const getReservations = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/reservations/get")
            .then((response) => {
                setArr(response.data);
        });
    }

    const postTrue = (e) => {
        setIsReserved(!isReserved);
        setidReser(e)
        console.log("id:"+e)
            axios.put("https://ordering-system-database.herokuapp.com/api/reservations/update",{
                id: e,
                is_reserved: 1
            })
            .then((response)=>{
                window.location.reload()
                setArr(arr.map((val)=>{
                    return val.id == e? {
                        idreservations: e, 
                        date:date, time:time, 
                        partysize:size, 
                        name:name,
                        emailaddress:email,
                        is_reserved:1
                    } :val
                }))
                // console.log(responsee)
                
            }).catch((err)=>{
                console.log(err)
        }) 
    }
    

    const postFalse = (e) => {
        setIsReserved(!isReserved);
        setidReser(e)
        console.log("id:"+ e)
        axios.put("https://ordering-system-database.herokuapp.com/api/reservations/update",{
                id: e,
                is_reserved: 0
            })
            .then((response)=>{
                window.location.reload()
                setArr(arr.map((val)=>{
                    return val.id == e? {
                        idreservations: e, 
                        date:date, time:time, 
                        partysize:size, 
                        name:name,
                        emailaddress:email,
                        is_reserved:0
                    } :val
                }))
                // console.log(responsee)
                
            }).catch((err)=>{
                console.log(err)
        })     
    }

    const deleteReservation = (id) => {
        axios.delete(`https://ordering-system-database.herokuapp.com/api/reservations/delete/${id}`).then((response)=> {
            getReservations(arr.filter((item)=> {
                return item.idreservations == id
            }))
        })
        
    }

    return(
        <div className="reservationdetails">
            <Sidebar></Sidebar>

            <div className="pagecontent">
                {/* Page heading */}
                <div className="flex-container-header">
                    <h1>TABLE RESERVATION</h1>
                </div>

                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
                
                {/* Page body */}
                <div className="reservation-details-content">
                <table className='admintables'>
                    <thead>
                        <tr>
                            <th className='adminth'>ID</th>
                            <th className='adminth'>Date</th>
                            <th className='adminth'>Time</th>
                            <th className='adminth'>Party Size</th>
                            <th className='adminth'>Name</th>
                            <th className='admintd'>Email</th>
                            <th className='admintd'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* <ReservationCard></ReservationCard> */}
                    {
                            arr.map((item, index)=> {
                               if (item.is_reserved==0)
                                {
                                    return(<tr>
                                        <td className='admintd'>{item.idreservations}</td>
                                        <td className='admintd'>{item.date}</td>
                                        <td className='admintd'>{item.time}</td>
                                        <td className='admintd'>{item.partysize}</td>
                                        <td className='admintd'>{item.name}</td>
                                        <td className='admintd'>{item.emailaddress}</td>
                                        <td className='admintd'>{
                                            item.is_reserved==0?
                                            <button className='reserveButton' onClick={(e)=>{
                                                postTrue(item.idreservations);
                                                localStorage.setItem("date", item.date);
                                                localStorage.setItem("time", item.time);
                                                localStorage.setItem("size", item.partysize);
                                                localStorage.setItem("name", item.name);
                                                localStorage.setItem("email", item.emailaddress);
                                             }}>✔</button>  :
                                            item.is_reserved==1?
                                            <button  className='orderDeleteButton' onClick={(e)=>{
                                                postFalse(item.idreservations);
                                                localStorage.setItem("date", item.date);
                                                localStorage.setItem("time", item.time);
                                                localStorage.setItem("size", item.partysize);
                                                localStorage.setItem("name", item.name);
                                                localStorage.setItem("email", item.emailaddress);
                                            }}>✖</button> :
                                            null
                                        }<button className='orderDeleteButton' onClick={()=> deleteReservation(item.idreservations)} > 🗑 </button></td>
                                    </tr>)
                                }
                                else if (item.is_reserved==1) 
                                {
                                    return(<tr style={{
                                        backgroundColor:'green'
                                    }}>
                                        <td className='admintd'>{item.idreservations}</td>
                                        <td className='admintd'>{item.date}</td>
                                        <td className='admintd'>{item.time}</td>
                                        <td className='admintd'>{item.partysize}</td>
                                        <td className='admintd'>{item.name}</td>
                                        <td className='admintd'>{item.emailaddress}</td>
                                        <td className='admintd'> {
                                            item.is_reserved==0?
                                             <button className='reserveButton' onClick={(e)=>{
                                                postTrue(item.idreservations);
                                                localStorage.setItem("date", item.date);
                                                localStorage.setItem("time", item.time);
                                                localStorage.setItem("size", item.partysize);
                                                localStorage.setItem("name", item.name);
                                                localStorage.setItem("email", item.emailaddress);
                                             }}>✔</button> :
                                             item.is_reserved==1?
                                             <button  className='orderDeleteButton' onClick={(e)=>{
                                                postFalse(item.idreservations);
                                                localStorage.setItem("date", item.date);
                                                localStorage.setItem("time", item.time);
                                                localStorage.setItem("size", item.partysize);
                                                localStorage.setItem("name", item.name);
                                                localStorage.setItem("email", item.emailaddress);
                                            }}>✖</button> :
                                             null
                                        }<button className='orderDeleteButton' onClick={()=> deleteReservation(item.idreservations)} > 🗑 </button></td>
                                    </tr>)
                                }

                                
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                progressStyle={{
                backgroundColor:'#FDD000'
            }}
            />
        </div>
    );
}

export default AdminReservations;