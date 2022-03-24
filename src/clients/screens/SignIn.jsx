import React, { useState, useEffect } from 'react';
import styles from '../css/SignIn.module.css';
import { useNavigate } from "react-router-dom";

function SignIn(){
    const navigate = useNavigate();
    const [creds,setCreds] = useState({
        email:"KEIPOGIMASARAP@GMAIL.COM",
        password:"123123123"
    });
    const initialValues = {email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      }

    const [data,setData] = useState({
        active1:false,
        active2:true,
    })

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors]);

    const submitHandler = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setSubmit(true);

        let capsEmail = formValues.email.toUpperCase();
        if(capsEmail === creds.email && formValues.password === creds.password){
            console.log("PASSED")
            localStorage.setItem("dummyToken", 1);
            navigate("/home");
            window.location.reload();
        }else{
            console.log("X")
            console.log("EMAIL : ", formValues.email);
            console.log("PASS : ", formValues.password);
        }
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid Email";
        } else if (values.email !== creds.email){
            errors.email = "Incorrect Email"
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password !== creds.password){
            errors.password = "Incorrect Password"
        }
        
        // else if (values.password.length < 4) {
        //   errors.password = "Password must be more than 4 characters";
        // } else if (values.password.length > 10) {
        //   errors.password = "Password cannot exceed more than 10 characters";
        // }
        return errors;
    };

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
                                    <input type="submit" className={styles.signinBtn} value="SIGN UP"/>
                                </form>
                            </div>
                        ):(
                            <div className={styles.signinFormsContainer}>
                                <form className={styles.signinForms} onSubmit={submitHandler}>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.errorTxt}>{formErrors.email}</p>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.errorTxt}>{formErrors.password}</p>
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