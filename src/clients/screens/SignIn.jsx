import React, { useState, useEffect } from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'


function SignIn(){
    const [addEmail, setAddEmail] = React.useState("");
    const [addPass, setAddPass] = React.useState("");
    const [addCPass, setAddCPass] = React.useState("");

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
    const [creds,setCreds] = React.useState({
        email:"KEIPOGIMASARAP@GMAIL.COM",
        password:"123123123"
    });
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
        if(Object.keys(loginErrors).length === 0 && isSubmit){
            console.log(loginValues)
        }
    }, [loginErrors]);
    
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
                        navigate("/ordering-system/home");
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