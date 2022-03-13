import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
// import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function AdminHome(){

    const navigate = useNavigate();
    const [creds,setCreds] = useState({
        email:"ADMIN@ADMIN.COM",
        password:"admin"
    });
    const initialValues = {email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    const [data,setData] = useState({
        active1:false,
        active2:true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

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
            localStorage.setItem("adminDummyToken", 1);
            navigate("/admin/sales");
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
        } else if (values.email != creds.email){
            errors.email = "Incorrect Email"
        }
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
                                <form className="signin-forms" onSubmit={submitHandler}>
                                    <p>ADMIN</p>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                    <p className='adminLoginError'>{formErrors.email}</p>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formValues.password}
                                        onChange={handleChange} 
                                    />
                                    <p className='adminLoginError'>{formErrors.password}</p>
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