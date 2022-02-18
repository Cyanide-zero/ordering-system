import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function Accounts(){
    return(
        <div className="accounts">
            <Sidebar></Sidebar>
            
            <div className="pagecontent">
                <h1>ADD ACCOUNTS</h1>
                <hr style={{height: 1, color:'black', backgroundColor:'black'}}></hr>
            
            {/* Page body */}
            <div className="account-content">
                    <form className='account-form'>
                        <label>ACCOUNT NAME</label>
                            <input 
                                type="text" 
                                name="accname"
                                required
                            />
                        
                        <label>EMAIL ADDRESS</label>
                            <input 
                                type="email" 
                                name="email" 
                                required
                            />

                        <label>PASSWORD</label>
                            <input 
                                type="password" 
                                name="password" 
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

export default Accounts;