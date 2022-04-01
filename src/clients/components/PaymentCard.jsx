import React from 'react';
import '../css/Order.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function PaymentCard (){
    const [select, setSelect] = React.useState("gcash");
    var token = localStorage.getItem("dummyToken");
    let local = JSON.parse(localStorage.getItem("Order"));
    const [receiver, setReceiver] = React.useState({
        recName:"",
        recNum:""
    });
    const [person, setPerson] = React.useState({
        name: "",
        number: "",
        address :"",
        info: ""
    })

    const [arr,setArr] = React.useState([]);

    const getOrders = () =>{
        console.log(local)
        axios.get("https://ordering-system-database.herokuapp.com/api/admin/orders")
            .then((response) => {
                  setArr(response.data);
        });
    }

    React.useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem("Order")))
        getOrders();
        setPerson({
            ...person,
            name: localStorage.getItem("Name"),
            number: localStorage.getItem("Contact Number"),
            address:localStorage.getItem("Address"),
            info: localStorage.getItem("Notes")
        })

        if(select==="gcash"){
            setReceiver({
                ...receiver,
                recName: "Joven R. Sabangan",
                recNum: "09493536943"
            })
        }else if(select === "bdo"){
            setReceiver({
                ...receiver,
                recName: "Elaine Joyce Olalo",
                recNum: "Number Ni Elaine XD"
            })
        }
    }, [select])
//
    const onSubmit = () => {
        Swal.fire({
            title: 'Please Check the Following Information',
            html: `<p>Name : ${person.name}</p>`+
                `<p>Contact Number : ${person.number}</p>`+
                `<p>Address : ${person.address}</p>`+
                `<p>Additional Notes : ${person.info}</p>`,
            confirmButtonText: 'Looks Good',
            customClass:{
                icon: 'swalertIcon',
                htmlContainer:'swalertHTML'
            }
        }).then((result)=>{
            if(result.isConfirmed){
                axios.post("https://ordering-system-database.herokuapp.com/api/admin/addorder",{
                    invoice: `MGR0000${arr.length+1}`,
                    cusname: person.name,
                    cusaddress: person.address,
                    price: JSON.parse(localStorage.getItem("Total")),
                    cuspaid: select,
                    notes: person.info,
                    local: local
                }).then((response) => {
                    console.log(response)
                })

                Swal.fire({
                    title: 'You\'ve reached the end of the process.',
                    html: `<p>Please send your payment to:</p><br>`+
                        `<p>Name : ${receiver.recName}</p>`+
                        `<p>Contact Number : ${receiver.recNum}</p>`,
                    confirmButtonText: 'Ok',
                    customClass:{
                        icon: 'swalertIcon',
                        htmlContainer:'swalertHTML'
                    }
                }).then(()=>{
                    localStorage.clear();
                    localStorage.setItem("dummyToken", token);
                })
            }
        })
    }

    return(
        <div className = "PaymentCard">
            <div className= "pagecontainer">
                <forms className="forms-container">
                    <label>PAYMENT</label>
                    <select className="category-form" onChange={(e)=>setSelect(e.target.value)}>
                        <option value="gcash">GCASH</option>
                        <option value="bdo">BDO</option>
                    </select>

                    <label>SEND TO</label>
                    <div className='receiverContainer'>
                        <p className="receiver">Receiver Name: {receiver.recName}</p>
                        <p className="receiver">Receiver Number: {receiver.recNum}</p>
                    </div>

                    <label>PAYMENT PROOF</label>
                    <input
                        type="image"
                        name="paymentproof"
                        required
                    />
                </forms>
                <button onClick={onSubmit} className="confirm-btn">CONFIRM</button>
            </div>
        </div>
    );
}

export default PaymentCard;