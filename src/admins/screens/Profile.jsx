import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'
import axios from "axios";

function Profile(){

    const [email, setEmail] = useState('')
    const [name, setName] = useState("");
    const [date, setDate] = useState("")

    // const getContent = () =>{
    //     axios.get("http://localhost:5000/api/admin/profile")
    //         .then((response) => {
    //             setEmail(response.data[0].email);
    //             setName(response.data[0].username);
    //             setDate(response.data[0].date);
    //     });
    // }

    useEffect(() => {
        setEmail(localStorage.getItem("adminEmail"));
        setName(localStorage.getItem("adminName"));
        setDate(localStorage.getItem("adminDate"));
        // getContent();
    }, []);

    return(
        <div className="profileContainer">
            <Sidebar/>
            
            <div className="pagecontent">
                <h1>PROFILE</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
            <div className="profile-content">
                <form className='profile-form'>
                    <label>ACCOUNT NAME</label>
                        <input 
                            type="text" 
                            value={name}
                            name="accname"
                            disabled={true}
                        />
                        
                    <label>EMAIL ADDRESS</label>
                        <input 
                            type="email"
                            value={email}
                            name="email"
                            disabled={true} 
                        />

                    <label>REGISTRATION DATE</label>
                        <input 
                            type="text" 
                            name="date"
                            value={date}
                            disabled={true} 
                        />
                </form>
            </div>
            </div>
        </div>
    );
}

export default Profile;