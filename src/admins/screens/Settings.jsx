import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function Settings(){
    return(
        <div className="settings">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <h1>SETTINGS</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
            <div className="settings-content">
                <form className='settings-form'>
                    <label>CURRENT PASSWORD</label>
                        <input 
                            type="password" 
                            name="currentpassword"
                            required
                        />
                        
                    <label>NEW PASSWORD</label>
                        <input 
                            type="password" 
                            name="newpassword" 
                            required
                        />

                    <label>CONFIRM PASSWORD</label>
                        <input 
                            type="password" 
                            name="confirmpassword" 
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