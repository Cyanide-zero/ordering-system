import React from 'react';
import { useNavigate } from "react-router-dom";
// import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import axios from 'axios';

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

function AdminHome(){
    const md5 = require('md5');
    function handleEscape(){
        navigate("/");
    }
    useKey("AltRight", handleEscape)
    const navigate = useNavigate();
    const initialValues = {email: "", password: "" };
    const [loginValues, setloginValues] = React.useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginValues({ ...loginValues, [name]: value });
    }

    const login = (e)=>{
        e.preventDefault();

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
                localStorage.setItem("adminID", response.data[0].id);
                sessionStorage.setItem("currPass", md5(loginValues.password));
                navigate("/admin/sales");
                window.location.reload();
            }
        })
        console.log(capsEmail,loginValues.password)
    }

    return(
        <div className="adminhome">
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-buttons">
                        <button
                        className='selector-active'>
                            ADMIN</button>
                    </div>
                    <div className='imgSignInContainer'>
                    <div className="signin-forms-container">
                        <form className="signin-forms" onSubmit={login}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={loginValues.email}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginValues.password}
                                onChange={handleChange} 
                            />
                            <input type="submit" className="signin-btn" value="ADMIN SIGN IN"/>
                        </form>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default AdminHome;