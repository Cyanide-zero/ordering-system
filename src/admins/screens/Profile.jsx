import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css' 

function Profile(){
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
                            name="accname"
                            disabled={true}
                        />
                        
                    <label>EMAIL ADDRESS</label>
                        <input 
                            type="email" 
                            name="email"
                            disabled={true} 
                        />

                    <label>REGISTRATION DATE</label>
                        <input 
                            type="date" 
                            name="date"
                            disabled={true} 
                        />
                </form>
            </div>
            </div>
        </div>
    );
}

export default Profile;