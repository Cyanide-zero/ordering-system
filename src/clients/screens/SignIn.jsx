import React, { useState } from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from "react-router-dom";

function SignIn(){
    const navigate = useNavigate();
    const [creds,setCreds] = useState({
        email:"KEIPOGIMASARAP@GMAIL.COM",
        password:"123123123"
    });
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState(""); 
    const [data,setData] = useState({
        active1:false,
        active2:true,
    });

    const submitHandler = (e)=>{
        e.preventDefault();
        let capsEmail = email.toUpperCase();
        if(capsEmail === creds.email && pass === creds.password){
            console.log("PASSED")
            navigate("/home");
        }else{
            console.log("X")
            console.log("EMAIL : ", email);
            console.log("PASS : ", pass);
        }
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
                                <form className={styles.signinForms} >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                     <input
                                        type="password"
                                        name="cpassword"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <button className={styles.signinBtn}>SIGN UP</button>
                                </form>
                            </div>
                        ):(
                            <div className={styles.signinFormsContainer}>
                                <form className={styles.signinForms} onSubmit={submitHandler}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={pass}
                                        onChange={e => setPass(e.target.value)}
                                        required
                                    />
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