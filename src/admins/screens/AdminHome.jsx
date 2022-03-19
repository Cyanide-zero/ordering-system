import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
// import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import axios from 'axios';

function AdminHome(){

    const navigate = useNavigate();
    const [creds,setCreds] = useState({
        email:"KEIPOGIMASARAP@GMAIL.COM",
        password:"123123123"
    });
    const initialValues = {email: "", password: "" };
    const [loginValues, setloginValues] = useState(initialValues);
    const [loginErrors, setloginErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginValues({ ...loginValues, [name]: value });
    }

    const [data,setData] = useState({
        active1:false,
        active2:true,
    })

    useEffect(() => {
        console.log(loginErrors)
        if(Object.keys(loginErrors).length === 0 && isSubmit){
            console.log(loginValues)
        }
    }, [loginErrors]);

    const login = (e)=>{
        e.preventDefault();
        setloginErrors(validate(loginValues));
        setSubmit(true);

        let capsEmail = loginValues.email.toUpperCase();
        // if(capsEmail === creds.email && loginValues.password === creds.password){
        //     console.log("PASSED")
        //     localStorage.setItem("dummyToken", 1);
        //     // navigate("/home");
        //     // window.location.reload();
        // }else{
        //     console.log("X")
        //     console.log("EMAIL : ", loginValues.email);
        //     console.log("PASS : ", loginValues.password);
        // }

        axios.post("https://ordering-system-database.herokuapp.com/api/admin/login", {
            email: capsEmail,
            password: loginValues.password
        }).then((response) => {
            console.log(response);
            // console.log(response.data.message)
            if(!response.data.message){
                localStorage.setItem("adminDummyToken", 1);
                localStorage.setItem("adminName", response.data[0].username);
                localStorage.setItem("adminEmail", response.data[0].email);
                localStorage.setItem("adminDate", response.data[0].date);
                navigate("/admin/sales");
                window.location.reload();
            }
        })
        console.log(capsEmail,loginValues.password)
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid Email";
        } 
        // else if (values.email != creds.email){
        //     errors.email = "Incorrect Email"
        // }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password != creds.password){
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
        <div className="adminhome">
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-buttons">
                        <button
                        onClick={() => setData({
                            ...data,
                            active1:true,
                            active2:false
                        })}
                        className={data.active1===true?"selector-active":"selector"}>
                            CASHIER</button>
                        <button
                        onClick={() => setData({
                            ...data,
                            active2:true,
                            active1:false
                        })}
                        className={data.active2===true?"selector-active":"selector"}>
                            ADMIN</button>
                    </div>

                    {/* CONDITIONAL RENDERING */}
                    {
                        data.active1 === true?
                        (
                            <div className="signin-forms-container">
                                <p>CASHIER</p>
                                <form className="signin-forms" >
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
                                    <input type="submit" className="signin-btn" value="CASHIER SIGN IN"/>
                                </form>
                            </div>
                        ):(
                            <div className="signin-forms-container">
                                <form className="signin-forms" onSubmit={login}>
                                    <p>ADMIN</p>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={loginValues.email}
                                        onChange={handleChange}
                                    />
                                    <p className='adminLoginError'>{loginErrors.email}</p>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={loginValues.password}
                                        onChange={handleChange} 
                                    />
                                    <p className='adminLoginError'>{loginErrors.password}</p>
                                    <input type="submit" className="signin-btn" value="ADMIN SIGN IN"/>
                                </form>
                            </div>
                        )
                    }
                    </div>
            </div>
        </div>
    );
}

export default AdminHome;