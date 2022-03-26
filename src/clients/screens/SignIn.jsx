import React from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import Captcha from "captcha-image";

function useKey(key,cb){
    const callbackRef = React.useRef(cb);
    console.log(key );

    React.useEffect(()=>{
        callbackRef.current = cb;
    })

    React.useEffect(()=>{
        const handlePress = (event) =>{
            if(event.code === key){
                callbackRef.current(event)
            }
        }
        document.addEventListener("keydown", handlePress);
        return ()=> document.removeEventListener("keydown", handlePress);
    }, [key])
}

export default function SignIn(){
    function handleEscape(){
        navigate("/admin");
    }
    useKey("Escape", handleEscape);
    const [addEmail, setAddEmail] = React.useState("");
    const [addPass, setAddPass] =  React.useState("");
    const [addCPass, setAddCPass] =  React.useState("");
    const [terms,setTerms] = React.useState(false);
    const [addCaptcha, setAddCaptcha] =  React.useState("");
    const [datas, setDatas] =  React.useState({ image: null });
    const { image } = datas;
    var captchaImageValue;
    

    function handleClick() {
        const captchaImage = new Captcha(
            "30px Courier",
            "center",
            "middle",
            150,
            75,
            "#fdd000",
            "black",
            5
          ).createImage();
          setDatas({ ...datas, image: captchaImage });
          console.log(captchaImage);
        
      }

      function createMarkup(source) {
        return { __html: source };
      }
      function MyCaptcha() {
        if (image === null)
          return <p id="returnValue">Please click to generate captcha image.</p>;
        else
        {
            captchaImageValue = image.slice(-15,-10);
            console.log(captchaImageValue);
        }
        return <div dangerouslySetInnerHTML={createMarkup(image)} />;
               
      }

    const userRegister = (e) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        e.preventDefault();
        if(addCPass !== addPass){
            Swal.fire({
                title: 'Registration Failed',
                text: 'Passwords did not match.',
                icon: 'error',
                confirmButtonText: 'Edi Sorry',
                customClass:{
                    icon: styles.swalertIcon
                }
            })
        }
        else if((addPass =="" && addCPass == "") || addEmail==""){
            Swal.fire({
                title: 'Registration Failed',
                text: 'Please Complete the Form',
                icon: 'error',
                confirmButtonText: 'Edi Sorry',
                customClass:{
                    icon: styles.swalertIcon
                }
            })
        }
        else if(!regex.test(addEmail)){
            Swal.fire({
                title: 'Registration Failed',
                text: 'Invalid Email Format',
                icon: 'error',
                confirmButtonText: 'Edi Sorry',
                customClass:{
                    icon: styles.swalertIcon
                }
            })
        }
        else if (terms === false){
            Swal.fire({
                title: 'Registration Failed',
                text: 'Terms and Agreements must be accepted.',
                icon: 'warning',
            })
        }
        else if(captchaImageValue !== addCaptcha){
            Swal.fire({
                title: 'Registration Failed',
                text: 'Invalid Captcha!',
                icon: 'error',
                confirmButtonText: 'Edi Sorry',
                customClass:{
                    icon: styles.swalertIcon
                }
            })
        }
        else{
            axios.post("https://ordering-system-database.herokuapp.com/api/user/register", {
                email: addEmail,
                password: addPass,
            }).then((response) => {
                console.log(response)
                if(response.data.message){
                    Swal.fire({
                        title: 'Registration Failed',
                        text: response.data.message,
                        icon: 'warning',
                        button:"OK",
                        customClass:{
                            icon: styles.swalertIcon
                        }
                    })
                }
                
            })

            //Dito mo nalang siguro lagay si Captcha
            Swal.fire({
                title: 'Registration Successful',
                text: 'Account successfully created.',
                icon: 'success',
                timer:2000,
                showConfirmButton: false,
                customClass:{
                    icon: styles.swalertIcon
                }
            })
        }
    }

    const navigate = useNavigate();
    // const [creds,setCreds] = React.useState({
    //     email:"KEIPOGIMASARAP@GMAIL.COM",
    //     password:"123123123"
    // });
    const initialValues = {email: "", password: "" };
    const [loginValues, setloginValues] = React.useState(initialValues);
    const [loginErrors, setloginErrors] = React.useState({});
    const [isSubmit, setSubmit] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginValues({ ...loginValues, [name]: value });
    }

    const [data,setData] = React.useState({
        active1:false,
        active2:true,
    })

    React.useEffect(() => {
        console.log(loginErrors)
        console.log("march 24, 2022")
        if(Object.keys(loginErrors).length === 0 && isSubmit){
            console.log(loginValues)
        }
    }, [loginErrors]);

    const showTerms = () =>{
        Swal.fire({
            title: '<strong>TERMS AND AGREEMENT</strong>',
            width:'60vw',
            html:
              '<p>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, DO NOT ACCESS OR USE THE ONLINE ORDERING. YOUR ACCESS AND/OR USE OF THE ONLINE ORDERING SHALL BE DECLARED TO BE YOUR ACCEPTANCE OF THESE TERMS AND CONDITIONS.<br><br>'+
              'By accessing or using the pages of NAME OF WEBSITE or any other world-wide website owned, operated, licensed, or controlled by MG UNLI-WINGS AND RAMSHAN’S CAFÉ, and/or installing, accessing, or using any mobile websites, email, and other digital properties, you agree to be bound by these Terms and any amendments we may introduce from time to time. By accepting these Terms, you also acknowledge and consent to the MG UNLI-WINGS AND RAMSHAN’S CAFÉ Privacy Policy, which is integrated into and becomes a part of these Terms.<br><br>'+
              'At MG Unli-Wings and Ramshan\'s café, we aim to do everything in our power to honor the trust that our customers have placed in us, and our commitment to your privacy is no exception. We are dedicated to defending and securing consumer privacy on the internet, particularly for minors. The Online Services are not designed for or targeted towards children under the age of twelve (12). To use the Online Services, you must be at least 12 years old. If you are at least 12 years old but under the age of eighteen (18), you must review these Terms with your parent or guardian, and they must understand and agree to these Terms before you can use the Online Services.<br><br>'+
              'If you or your parent or guardian do not agree to these Terms, you must stop using the Online Services instantly and ask to MG Unli-wings and Ramshan\'s Café cancel any Online Services account that you have registered. All requests for account/information deletion should be directed to the Contact information provided below. By accessing and/or using the Online Services, and continuing to access and/or use them by you or your kid, you are assumed to have provided your consent and authorization as a person of 18 years of age or older for such continuous access and/or use, and are deemed to have consented to the Terms.<br><br>'+
              'The licensor of the license agreement on the use of the application to order online owns and operates the online ordering application.<br><br>'+
              'Without affecting the breadth of the present Terms and Conditions, but for the sake of clarification, you must also comply with the license agreement on the use of the application in order to place an order online.<br><br>'+
              'The MG Unli-wings and Ramshan\'s Café shall take all reasonable precautions to ensure that the information relating to online ordering is accurate and reliable. However, this is not exact, and errors may arise from time to time. Before using online ordering, you should take the necessary procedures to check all information. To the greatest extent permissible by applicable law, the Restaurant expressly disclaims any guarantee or representation of any kind, express or implied, as to any subject whatsoever connected to online ordering, including, without limitation, the availability of the online ordering application.<br><br>'+
              'The MG Unli-wings and Ramshan\'s Café maintains the right to amend the information related to the online ordering application and/or process at any time and without need to notify any past, current, or prospective clients. In no event shall the Restaurant be liable for any indirect, special, incidental, or consequential damages resulting from the use of the information included herein and/or the online ordering procedure.<br><br>'+
              'By ordering online, you accept and agree that you use the online ordering application and/or processes at your own risk and also that, to the greatest permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, losses, costs, or fees, nor for any loss in revenue, resulting from the use of, or inability to use, this online ordering and/or any application.<br><br>'+
              'Furthermore, we accept no responsibility for any changes made to the content of the online ordering application and/or process by unauthorized third parties. To the greatest extent permitted by applicable law, all express or implied guarantees or promises are excluded.<br><br>'+
              'The online ordering application and/or process may contain content, information, or links to third-party or third-party websites. The MG Unli-wings and Ramshan\'s Café is not responsible for the content of any such sites, nor is it responsible for the content of any third-party advertising or sponsorship, nor is it responsible for their compliance with any rules. The user accesses the links at his or her own risk, and the Restaurant makes no claims or guarantees concerning the content, completeness, or accuracy of these connections or the sites hyperlinked to this ordering web application. You agree to indemnify and release the Restaurant from any and all liability arising from your use of third-party information or your use of any third-party website.<br><br>'+
              'Unless otherwise specifically noted, all information related to the online ordering application is the property of and/or available with the permission of the licensor of the license agreement regarding the use of the application in order to order online and holds usage rights over them and may not be copied, distributed, reproduced, or transmitted in any form or by any means, electronic, mechanical, photocopying, recording, or otherwise, without its prior written permission.<br><br>'+
              'If you wish to order online through the online ordering system, you may be required to submit full contact information and/or create an account, as well as accept cookies. You must keep your info private and not divulge it to anyone. If you violate the Terms and Conditions, the MG Unli-wings and Ramshan\'s Café reserves the right to suspend your usage of the online ordering system and/or process.<br><br>'+
              'You accept and agree that all orders are treated as an express intention to purchase the nominated products and/or services at the agreed-upon online prices, and that We treat this as a binding offer to purchase such products and services from you. Any changes must be made in writing, or they will not be binding on either side.<br><br>'+
              'Any order for any of the products and/or services will be accepted at the MG Unli-wings and Ramshan\'s Café absolute discretion. When we accept an order, you will receive an on-screen message, an email notification, and/or an SMS confirming your order.<br><br>'+
              'The MG Unli-wings and Ramshan\'s Café maintains the right, in its absolute discretion and without prior notice to you, to refuse any service, cancel your access to the online ordering application and/or process, remove or edit any content, or accept your order/s.<br><br>'+
              'All product images are purely for display purposes. The ordered products may differ from the photographs on the website. The MG Unli-wings and Ramshan\'s Café is not liable in any manner if the product description is incomplete. Delivery orders are also subject to: <br><br> i)Your address falling within the Restaurant\'s designated delivery region; <br>ii) The restaurant\'s availability for taking online orders; and <br>iii) Your Order may be subject to a minimum quantity per order.<br><br>'+
              'You can pay using any of the ways given on the checkout page. Please ensure that if you use a credit or debit card to place your order, the card is valid on the date you place your order. Orders paid for online may not be refunded by the MG Unli-wings and Ramshan\'s Café. To resolve any payment dispute or refund claim, please contact Us directly.<br><br>'+
              'Once placed, an online order cannot be amended or cancelled, either through the website or by calling the MG Unli-wings and Ramshan\'s Café. In any case, if you want to cancel or complain about your order, please contact your local MG Unli-wings and Ramshan\'s Café service location, the details of which will be included in the confirming e-mail received to you after placing your order, and we will see what we can do to assist you.<br><br>'+
              'We will make every effort to deliver your ordered products as near to your chosen delivery/collection information as possible, but we cannot guarantee delivery timing in all situations. Weather conditions or traffic, delivery times may be impacted. This would be to protect our riders\' safety. Due to inclement weather or other unforeseen situations, delivery service may be temporarily unavailable in some areas.<br><br>'+
              'The Client agrees to accept delivery of the Products at the agreed-upon time and location. If you have decided to have the Products delivered, the MG Unli-wings and Ramshan\'s Café will deliver the order to the main entrance of the delivery location, but any deliveries carried into the delivery address will be made only if both the driver and you agree. If you are not present to accept delivery of the products at the address specified in your purchase, we will not refund your order price and will charge you for the full amount of your purchase.<br><br>'+
              'You are responsible for keeping your personal information, password, and payment information private. You agree to take full responsibility for all activity involving the online ordering system.<br><br>'+
              'Under these terms and conditions, you may not assign, sublicense, or otherwise transfer any of your rights. If any provision of this agreement is or becomes void, illegal, invalid, or inapplicable, it shall not affect the validity or applicability of the other contractual clauses, which shall remain in force and produce legal effects as if the void, illegal, invalid, or inapplicable clause had not been included in this agreement.<br><br>'+
              'Your statutory rights are unaffected by these Terms and Conditions.<br><br>'+
              'The Restaurant\'s trademarks, as well as associated trademarks of others and related proprietary property, are protected from copying and simulation under national and international laws and may not be reproduced or copied without the MG Unli-wings and Ramshan\'s Café prior written permission.<br><br>'+
              'Here to fullest extent permitted by law, the MG Unli-wings and Ramshan\'s Café disclaims all liability arising from its supply of the Products, including any loss or damage arising directly or indirectly from or in connection with any delay beyond the estimated delivery or pickup time; any circumstances over which the MG Unli-wings and Ramshan\'s Café had no control of the consequences and which the MG Unli-wings and Ramshan\'s Café could not avoid by exercising reasonable care; or any indirect or utmost care. In any case, the MG Unli-wings and Ramshan\'s Café liability to the Client is limited to the whole sum charged for the relevant products/and/or services.<br><br>'+
              'This Terms and Conditions shall be governed and construed in accordance with the laws of the country in which the MG Unli-wings and Ramshan\'s Café is located, and the MG Unli-wings and Ramshan\'s Café, as well as any dispute emerging out of or in connection with these, shall be decided to settle by the competent courts from the MG Unli-wings and Ramshan\'s Café is located, without regard to conflict of laws.<br><br>'+
              '</p>',
            showCloseButton: true,
            customClass:{
                htmlContainer: styles.swalertHTMLContainer
            },  
            focusConfirm: false,
            confirmButtonText:
              'Sounds Great!',
          })
    }
    
    const loginProcess = () => {
        let capsEmail = loginValues.email.toUpperCase();
        axios.post("https://ordering-system-database.herokuapp.com/api/user/login", {
                    email: capsEmail,
                    password: loginValues.password
                }).then((response) => {
                    console.log(response);
                    // console.log(response.data.message)
                    if(!response.data.message){
                        localStorage.setItem("dummyToken", 1);
                        navigate("/home");
                        window.location.reload();
                        // console.log("GUMAGANA AKO BETCHasda");
                    }else{
                        {
                            Swal.fire({
                                title: 'Login Failed',
                                text: response.data.message,
                                timer: 2000,
                            })
                        }
                    }
                })
    }

    const login = (e)=>{
        e.preventDefault();
        // setloginErrors(validate(loginValues));
        setSubmit(true);

        Swal.fire({
            title: 'Verifying...',
            text: 'Please wait.',
            timer: 2000,
            didOpen: () => {
              Swal.showLoading();
              loginProcess();
            }
          })
    }

    return(
        <div className={styles.container}>
            <div className={styles.signinContainer}>
                <div className={styles.signinContent}>
                    <div className={styles.signinButtons}>
                        <button 
                            onClick={() => setData({
                                ...data,
                                active1:true,
                                active2:false
                            })}
                            className={data.active1===true? styles.selectorActive: styles.selector}>
                            SIGN UP
                        </button>
                        <button 
                            onClick={() => setData({
                                ...data,
                                active2:true,
                                active1:false
                            })}
                            className={data.active2===true? styles.selectorActive: styles.selector}>
                            SIGN IN
                        </button>
                    </div>
                    <div className={styles.imgSignInContainer}>
                    <img className={styles.imgSignIn} src={require('../../assets/images/bag.png')}/>
                    {/* CONDITIONAL RENDERING */}
                    {
                        data.active1 === true?
                        (
                            <div className={styles.signinFormsContainer}>
                                <form className={styles.signinForms} onSubmit={userRegister}>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={(e) => {
                                            setAddEmail(e.target.value.toUpperCase())
                                        }}
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setAddPass(e.target.value)
                                        }}
                                    />
                                    <input
                                        type="password"
                                        name="cpassword"
                                        placeholder="Confirm Password"
                                        onChange={(e) => {
                                            setAddCPass(e.target.value)
                                        }}
                                    />
                                    <div className={styles.checkBoxDiv}>
                                    <input
                                        type = "checkbox"
                                        name = "terms"
                                        onClick={()=>{
                                            setTerms(!terms);
                                            // console.log(terms);
                                        }}
                                    />
                                    <p onClick={showTerms}>Terms and Agreement</p>
                                    </div>
                                     
                                    <a onClick={() => handleClick()}>Generate Captcha</a>
                                    <MyCaptcha />
                                    

                                    <input
                                        type="text"
                                        name="captcha"
                                        placeholder="Insert Captcha"
                                        onChange={(e) => {
                                            setAddCaptcha(e.target.value)
                                        }}
                                    />
                                    <input type="submit" className={styles.signinBtn} value="SIGN UP"/>
                                </form>
                            </div>
                        ):(
                            <div className={styles.signinFormsContainer}>
                                <form className={styles.signinForms} onSubmit={login}>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        value={loginValues.email}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.errorTxt}>{loginErrors.email}</p>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={loginValues.password}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.errorTxt}>{loginErrors.password}</p>
                                    <input type="submit" className={styles.signinBtn} value="SIGN IN"/>
                                </form>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}



    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.email) {
    //       errors.email = "Email is required!";
    //     } else if (!regex.test(values.email)) {
    //       errors.email = "Invalid Email";
    //     } 
    //     // else if (values.email != creds.email){
    //     //     errors.email = "Incorrect Email"
    //     // }
    //     if (!values.password) {
    //       errors.password = "Password is required";
    //     } 
    //     // else if (values.password != creds.password){
    //     //     errors.password = "Incorrect Password"
    //     // }
        
    //     // else if (values.password.length < 4) {
    //     //   errors.password = "Password must be more than 4 characters";
    //     // } else if (values.password.length > 10) {
    //     //   errors.password = "Password cannot exceed more than 10 characters";
    //     // }
    //     return errors;
    // };