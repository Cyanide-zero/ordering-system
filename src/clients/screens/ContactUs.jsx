import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsCSS from '../css/ContactUs.module.css';

function ContactUs(){
    return(
        <div className = {ContactUsCSS.container}>
            <Header/>
                <div className={ContactUsCSS.contactTop}>
                    <h1 className={ContactUsCSS.contactTopHeading}>GET IN TOUCH WITH US</h1>
                    <p className={ContactUsCSS.contactTopText}>You can also email us at email@gmail.com</p>
                </div>
                <form className={ContactUsCSS.formGroup}>
                    <div className={ContactUsCSS.formGroup1}>
                        <div className={ContactUsCSS.formGroup1Content}>
                            FIRST NAME
                            <input type="text" name="fname"></input>
                        </div>
                        <div className={ContactUsCSS.formGroup1Content}>
                            LAST NAME
                            <input type="text" name="lname"></input>
                        </div>
                    </div>
                    <div className={ContactUsCSS.formGroup2}>
                        EMAIL ADDRESS
                        <input type = "text" name="email"></input>
                    </div>
                    <div className={ContactUsCSS.formGroup3}>
                        MESSAGE
                        <input type = "text" name="msg"></input>
                    </div>
                    <button className={ContactUsCSS.formButton}>
                        RESERVE NOW
                    </button>
                </form>
            <Footer/>
        </div>
    );
}

export default ContactUs;