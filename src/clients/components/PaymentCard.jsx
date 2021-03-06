import React from 'react';
import '../css/Order.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {storage} from '../../firebase';
import {ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'

function PaymentCard (){
    const [select, setSelect] = React.useState("gcash");
    var token = localStorage.getItem("dummyToken");
    var useremail = localStorage.getItem("useremail");
    var username = localStorage.getItem("username");
    var number = localStorage.getItem("number");
    var address = localStorage.getItem("address");
    var userid = localStorage.getItem("userid")
    let local = JSON.parse(localStorage.getItem("Order"));
    const [receiver, setReceiver] = React.useState({
        recName:"",
        recNum:""
    });
    const [person, setPerson] = React.useState({
        name: "",
        number: "",
        address :"",
        info: "",
        ship:""
    })
    const [imageUpload, setImageUpload] = React.useState(null);
    const [imagePreview, setImagePreview] = React.useState(null);
    const [imagePath, setImagePath] = React.useState("")
    const [arr,setArr] = React.useState([]);
    const navigate = useNavigate();
    var imageRef;

    const getOrders = () =>{
        console.log(local)
        axios.get("https://ordering-system-database.herokuapp.com/api/admin/orders")
            .then((response) => {
                  setArr(response.data);
        });
    }

    React.useEffect(()=>{
        // console.log(imagePath)
        console.log(JSON.parse(localStorage.getItem("Order")))
        getOrders();
        setPerson({
            ...person,
            name: localStorage.getItem("Name"),
            number: localStorage.getItem("Contact Number"),
            address:localStorage.getItem("Address"),
            info: localStorage.getItem("Notes"),
            ship:localStorage.getItem("Ship")
        })

        if(select==="gcash"){
            setReceiver({
                ...receiver,
                recName: "Ladylyn Valencia",
                recNum: "09655667614"
            })
        }else if(select === "bdo"){
            setReceiver({
                ...receiver,
                recName: "Ladylyn Valencia",
                recNum: "1146 2373 05"
            })
        }
    }, [select])
//
    const onSubmit = () => {
        if(imagePreview === null){
            Swal.fire({
                title: 'Payment Failed',
                text: 'Please upload proof of payment for our staff to verify your order.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass:{
                    icon: 'swalertIcon'
                }
            })
        }else{
            imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
            setImagePath(imageRef._location.path_)
            console.log(imagePath)
            console.log(imageRef._location.path_)
            uploadBytes(imageRef, imageUpload)
            .then((response)=>{
                console.log(response)
            });
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
                        local: local,
                        imagepath: imageRef._location.path_,
                        orderedby: useremail,
                        ship: person.ship
                    }).then((response) => {
                        console.log(response)
                    })
    
                    Swal.fire({
                        title: 'You\'ve reached the end of the process.',
                        text:'Please wait as we verify your payment.',
                        confirmButtonText: 'Ok',
                        customClass:{
                            icon: 'swalertIcon',
                            htmlContainer:'swalertHTML'
                        }
                    }).then(()=>{
                        localStorage.clear();
                        localStorage.setItem("dummyToken", token);
                        localStorage.setItem("username", username);
                        localStorage.setItem("useremail", useremail);
                        localStorage.setItem("number", number);
                        localStorage.setItem("address", address);
                        localStorage.setItem("userid", userid);
                    })
                }
            }).then((result)=>{
                navigate("/home");
            })
        }
    }

    const previewImage = (e) =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImagePreview(reader.result)
                setImageUpload(e.target.files[0])
            }
        }
        reader.readAsDataURL(e.target.files[0])
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

                    <label>SEND PAYMENT TO</label>
                    <div className='receiverContainer'>
                        <p className="receiver">Receiver Name: {receiver.recName}</p>
                        <p className="receiver">Receiver Number: {receiver.recNum}</p>
                    </div>

                    <label>PAYMENT PROOF</label>
                    <input
                        type="file"
                        name="paymentproof"
                        onChange={(e)=>previewImage(e)}
                        accept="image/*"
                        required
                    />
                    {
                        imagePreview === null?
                        <p style={{color:'white'}}>NO IMAGE CHOSEN</p>
                        :
                        <img src={imagePreview} className='previewImage'/>
                    }
                </forms>
                <button onClick={onSubmit} className="confirm-btn">CONFIRM</button>
            </div>
        </div>
    );
}

export default PaymentCard;