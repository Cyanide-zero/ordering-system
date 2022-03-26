import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import styles from '../../clients/css/SignIn.module.css';

function Settings(){
    const md5 = require('md5');
    const [addPassword, setaddPassword] =  React.useState("");
    const [addCPass, setAddCPass] = React. useState("");
    const initialValues = {password: ""};
    const [loginValues, setloginValues] =  React.useState(initialValues);
    const [loginErrors, setloginErrors] =  React.useState({});
    const [isSubmit, setSubmit] =  React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginValues({ ...loginValues, [name]: value });
    }

    React.useEffect(() => {
        console.log(loginErrors)
        if(Object.keys(loginErrors).length === 0 && isSubmit){
        }
    }, [loginErrors]);

    const login = (e)=>{
        e.preventDefault();
        setloginErrors(validate(loginValues));
        setSubmit(true);

        if(addCPass !== addPassword){
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

        axios.post("http://localhost:5000/api/user/login", {
            password: loginValues.password
        }).then((response) => {
            console.log(response);
            // console.log(response.data.message)
            if(!response.data.message){
                localStorage.setItem("dummyToken", 1);
                // navigate("/home");
                window.location.reload();
            }
        })

        axios.post("http://localhost:5000/api/admin/settings", {
                password: addPassword,
                id: localStorage.getItem("adminID"),
            }).then((response) => {
                console.log(response)
            })
    }
    

    const validate = (values) => {
        const errors = {};
        if (!values.password) {
          errors.password = "Password is required";
        } else if (md5(values.password) != sessionStorage.getItem("currPass")){
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
        <div className="settings">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <h1>SETTINGS</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
            <div className="settings-content">
                <form className='settings-form' onSubmit={login}>
                    <label>CURRENT PASSWORD</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Current Password"
                            value={loginValues.password}
                            onChange={handleChange}
                        />
                         <p className='adminLoginError'>{loginErrors.password}</p>
                        
                    <label>NEW PASSWORD</label>
                        <input 
                            type="password" 
                            name="newpassword" 
                            placeholder="New Password"
                            onChange={(e) => {
                                setaddPassword(e.target.value.toUpperCase())
                            }}
                            required
                        />

                    <label>CONFIRM PASSWORD</label>
                        <input 
                            type="password" 
                            name="confirmpassword" 
                            placeholder="Confirm Password"
                            onChange={(e) => {
                                setAddCPass(e.target.value.toUpperCase())
                            }}
                            required
                        />
                        
                    <div className="form-buttons">
                        <button className="cancel-btn">CANCEL</button>
                        <button className="submit-btn">SAVE</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Settings;