import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsCSS from '../css/ContactUs.module.css';
import Swal from 'sweetalert2'

const ContactUs = () => {

const [status, setStatus] = React.useState("Submit");
const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    setStatus("Sending...");
    const { fname, lname, email, msg } = e.target.elements;
    let details = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      msg: msg.value,
    };
    let response = await fetch("https://ordering-system-database.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    Swal.fire({
        title: 'Message sent!',
        text: 'Thank you for getting in touch with us.',
        icon: 'success',
        timer:2000,
        showConfirmButton: false,
        customClass:{
            icon: 'swalertIcon'
        }
    }).then((response) => {
    // window.location.reload();
    console.log(response)
    })
  };
    
    return(
        // <div className = {ContactUsCSS.container}>
        //     <Header/>
        //         <div className={ContactUsCSS.contactTop}>
        //             <h1 className={ContactUsCSS.contactTopHeading}>GET IN TOUCH WITH US</h1>
        //             <p className={ContactUsCSS.contactTopText}>You can also email us at email@gmail.com</p>
        //         </div>
        //         <form className={ContactUsCSS.formGroup} onSubmit={handleSubmit}>
        //             <div className={ContactUsCSS.formGroup1}>
        //                 <div className={ContactUsCSS.formGroup1Content}>
        //                     FIRST NAME
        //                     <input type="text" name="fname" id="fname" required></input>
        //                 </div>
        //                 <div className={ContactUsCSS.formGroup1Content}>
        //                     LAST NAME
        //                     <input type="text" name="lname" id="lname" required></input>
        //                 </div>
        //             </div>
        //             <div className={ContactUsCSS.formGroup2}>
        //                 EMAIL ADDRESS
        //                 <input type = "text" name="email" id="email" required></input>
        //             </div>
        //             <div className={ContactUsCSS.formGroup3}>
        //                 MESSAGE
        //                 <input type = "text" name="msg" id="msg" required></input>
        //             </div>
        //             <button className={ContactUsCSS.formButton} type="submit">
        //                 {status}
        //             </button>
        //         </form>
        //     <Footer/>
        // </div>
        <div className={ContactUsCSS.container}>
            <Header/>
            <div className={ContactUsCSS.contactInfo}>
                <div className={ContactUsCSS.infoContainer}>
                    <p><b>GIVE US A CALL</b></p>
                    <p>☎ (02)XXX-XX-XX</p>
                    <p>☎ 09XXXXXXXXX</p>
                </div>
                <div className={ContactUsCSS.infoContainer}>
                    <p><b>EMAIL US</b></p>
                    <p>✉ EMAIL@EMAIL.COM</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactUs;