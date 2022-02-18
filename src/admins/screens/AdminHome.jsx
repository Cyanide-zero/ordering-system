import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/AdminIndent.css'

function AdminHome(){
    return(
        <div className="adminhome">
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-buttons">
                        <button className="cashier-btn">CASHIER</button>
                        <button className="admin-btn">ADMIN</button>
                    </div>

                    <div className="signin-forms-container">
                        <form className="signin-forms">
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

                            <button className="signin-btn">SIGN IN</button>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default AdminHome;