import React, { useState } from 'react';
import styles from '../css/SignIn.module.css';

function SignIn(){
    const [data,setData] = useState({
        active1:false,
        active2:true,
    })


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
                            className={data.active1==true? styles.selectorActive: styles.selector}>
                            SIGN UP
                        </button>
                        <button 
                            onClick={() => setData({
                                ...data,
                                active2:true,
                                active1:false
                            })}
                            className={data.active2==true? styles.selectorActive: styles.selector}>
                            SIGN IN
                        </button>
                    </div>
                    {/* CONDITIONAL RENDERING */}
                    {
                        data.active1 == true?
                        (
                            <div className={styles.signinFormsContainer}>
                                <form className={styles.signinForms}>
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
                                        type="cpassword"
                                        name="cpassword"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <button className={styles.signinBtn}>SIGN UP</button>
                                </form>
                            </div>
                        ):(
                            <div className={styles.signinFormsContainer}>
                                <form className={styles.signinForms}>
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
                                    <button className={styles.signinBtn}>SIGN IN</button>
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