import React from 'react';
import '../css/Order.css';
import Swal from 'sweetalert2';

function DeliverTo (props){

    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [info,setInfo] = React.useState("N/A");

    const submitDeliver = (e) => {
        e.preventDefault();
        const regex = /^(09|\+639)\d{9}$/;
        if(name === "" || address === "" || number === ""){
            Swal.fire({
                title: 'Process Failed',
                text: 'Please complete name, address, and contact number.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass:{
                    icon: 'swalertIcon'
                }
            })
        }else if(!regex.test(number)){
            Swal.fire({
                title: 'Process Failed',
                text: 'Wrong Cellphone Number Format',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass:{
                    icon: 'swalertIcon'
                }
            })
        }else{
            Swal.fire({
                title: 'Please Check the Following Information',
                html: `<p>Name : ${name}</p>`+
                    `<p>Contact Number : ${number}</p>`+
                    `<p>Address : ${address}</p>`+
                    `<p>Additional Notes : ${info}</p>`,
                confirmButtonText: 'Looks Good',
                customClass:{
                    icon: 'swalertIcon',
                    htmlContainer:'swalertHTML'
                }
            }).then((result)=>{
                if(result.isConfirmed){
                    localStorage.setItem("Name", name);
                    localStorage.setItem("Address", address);
                    localStorage.setItem("Contact Number", number);
                    localStorage.setItem("Notes", info);
                    onConfirm();
                }
            })
        }
    }

    const onConfirm = () => {
        props.confirmHandler();
    }

    return(
        <div className = "deliverto">
            <div className= "pagecontainer">
                <form className="forms-container">
                    <div className="orderflex-container">
                        <div className="inside-flex">
                            <label>NAME</label>
                            <input
                                type="text"
                                className="customername"
                                name="CustomerName"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="inside-flex">
                            <label>CONTACT NUMBER</label>
                            <input
                                type="text"
                                name="ContactNumber"
                                placeholder="Contact Number"
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                    <label>ADDRESS</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />

                    <label>ADDITIONAL NOTES</label>
                    <input
                        type="text"
                        name="AdditionalNotes"
                        onChange={(e) => setInfo(e.target.value)}
                        required
                    />

                    <button onClick={submitDeliver}className="confirm-btn">CONFIRM</button>
                </form>
            </div>
        </div>
    );
}

export default DeliverTo;