import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css';
import ReservationCard from '../components/reservationcard';
import axios from 'axios';

function AdminReservations(){

    const [arr,setArr] = React.useState([]);
    const [isReserved,setIsReserved] = React.useState(false);
    const [idReser,setidReser] = React.useState(0);
    const [change,setChange] = React.useState(0);

    // const handleReservation = (e) => {
    //     setIsReserved(!isReserved);
    //     setidReser(e);
    //     let is_checked;
    //     if (isReserved===true)
    //     {
    //         is_checked = 1; 
            
    //         axios.post("http://localhost:5000/api/reservations/update",{
    //         id: idReser,
    //         is_reserved: isReserved
    //         })
    //         .then((response)=>{
    //             console.log(response)
                
    //         }).catch((err)=>{
    //             console.log(err)
    //         })
    //         setIsReserved(!isReserved)
    //     }
    //     else if (isReserved===false)
    //     {
    //         is_checked = 0; 

    //         axios.post("http://localhost:5000/api/reservations/update",{
    //         id: idReser,
    //         is_reserved: isReserved
    //         })
    //         .then((response)=>{
    //             console.log(response)
                
    //         }).catch((err)=>{
    //             console.log(err)
    //         })
    //         setIsReserved(!isReserved)
    //     }
    //     console.log(isReserved)
    // }

    const getReservations = () =>{
        axios.get("http://localhost:5000/api/reservations/get")
            .then((response) => {
                  setArr(response.data);
        });
    }

    const postTrue = (e) => {
        setidReser(e)
        //setIsReserved(0)
        console.log("id:"+e)
            axios.post("http://localhost:5000/api/reservations/update",{
            id: idReser,
            is_reserved: 1
            })
            .then((response)=>{
                console.log(response)
               
                
            }).catch((err)=>{
                console.log(err)
            })   
        }
    

    const postFalse = (e) => {
        setidReser(e)
        //setIsReserved(1)
        console.log("id:"+ e)
        axios.post("http://localhost:5000/api/reservations/update",{
            id: idReser,
            is_reserved: 0
            })
            .then((response)=>{
                console.log(response)
                
                
            }).catch((err)=>{
                console.log(err)
            })     
    }

    const deleteReservation = (id) => {
        axios.delete(`http://localhost:5000/api/reservations/delete/${id}`).then((response)=> {
            getReservations(arr.filter((item)=> {
                return item.idreservations == id
            }))
        })
        
    }

    React.useEffect(() => {
        getReservations();
        setChange(change+1);
        console.log(change)
    }, [isReserved]);

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
                               if (item.is_reserved===0)
                                {
                                    return(<tr>
                                        <td className='admintd'>{item.idreservations}</td>
                                        <td className='admintd'>{item.date}</td>
                                        <td className='admintd'>{item.time}</td>
                                        <td className='admintd'>{item.partysize}</td>
                                        <td className='admintd'>{item.name}</td>
                                        <td className='admintd'>{item.emailaddress}</td>
                                        <td className='admintd'>{
                                            item.is_reserved===0?
                                            <button onClick={(e)=>postTrue(item.idreservations)}>✔</button> :
                                            item.is_reserved===1?
                                            <button onClick={(e)=>postFalse(item.idreservations)}>❌</button> :
                                            null
                                        } &nbsp;|&nbsp;   <button onClick={()=> deleteReservation(item.idreservations)}> Delete </button></td>
                                    </tr>)
                                }
                                else if (item.is_reserved===1) 
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
                                            item.is_reserved===0?
                                             <button onClick={(e)=>postTrue(item.idreservations)}>✔</button> :
                                             item.is_reserved===1?
                                             <button onClick={(e)=>postFalse(item.idreservations)}>❌</button> :
                                             null
                                        }  &nbsp;|&nbsp;   <button> Delete </button></td>
                                    </tr>)
                                }

                                
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminReservations;