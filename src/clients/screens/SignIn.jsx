import React, { useState, useEffect } from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

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

function SignIn(){
    function handleEscape(){
        navigate("/admin");
    }
    useKey("Escape", handleEscape);
    const [addEmail, setAddEmail] = React.useState("");
    const [addPass, setAddPass] = React.useState("");
    const [addCPass, setAddCPass] = React.useState("");
    const [terms,setTerms] = React.useState(false);

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
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum. A arcu cursus vitae congue mauris rhoncus aenean vel. Tincidunt dui ut ornare lectus sit amet est. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Arcu dui vivamus arcu felis bibendum ut. Sed nisi lacus sed viverra. Urna id volutpat lacus laoreet non curabitur gravida. Scelerisque eu ultrices vitae auctor eu augue. Purus ut faucibus pulvinar elementum integer enim. Sapien et ligula ullamcorper malesuada proin libero. Id diam maecenas ultricies mi eget mauris. Rhoncus mattis rhoncus urna neque. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Neque sodales ut etiam sit amet nisl. Vitae nunc sed velit dignissim sodales. Risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.'+
              'Amet volutpat consequat mauris nunc congue nisi vitae. Sit amet purus gravida quis. Congue quisque egestas diam in arcu cursus euismod quis. At ultrices mi tempus imperdiet. Nisi vitae suscipit tellus mauris a diam. Mauris sit amet massa vitae tortor condimentum lacinia. Donec ultrices tincidunt arcu non sodales neque. Dictum non consectetur a erat. Mattis pellentesque id nibh tortor id. Non odio euismod lacinia at quis risus sed. Auctor elit sed vulputate mi sit amet mauris commodo.'+
              'Netus et malesuada fames ac turpis egestas sed tempus. Sit amet dictum sit amet justo donec enim. Congue quisque egestas diam in arcu cursus euismod. Integer malesuada nunc vel risus commodo viverra. At urna condimentum mattis pellentesque. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Suspendisse faucibus interdum posuere lorem ipsum. Elementum curabitur vitae nunc sed. Ullamcorper morbi tincidunt ornare massa. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Eget duis at tellus at urna. Tempor id eu nisl nunc mi. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Blandit aliquam etiam erat velit. Netus et malesuada fames ac turpis egestas. Ullamcorper sit amet risus nullam eget. Nulla aliquet enim tortor at auctor urna nunc. Pellentesque pulvinar pellentesque habitant morbi.'+
              'Massa sed elementum tempus egestas sed sed risus. Mauris nunc congue nisi vitae. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Volutpat consequat mauris nunc congue nisi vitae suscipit. Odio euismod lacinia at quis. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat. Arcu dictum varius duis at. Vitae et leo duis ut. Imperdiet proin fermentum leo vel orci porta non. Vitae et leo duis ut diam quam. Sit amet consectetur adipiscing elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. In eu mi bibendum neque egestas congue quisque. Ut sem nulla pharetra diam. At consectetur lorem donec massa sapien faucibus et. Vel facilisis volutpat est velit egestas. Elit sed vulputate mi sit amet mauris commodo quis.</p>',
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
    );
}

export default SignIn;


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