import React from 'react';
import '../css/SignIn.css';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignIn(){
    return(
        <div className="container">
            <Header/>
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-buttons">
                        <button className="cashier-btn">SIGN UP</button>
                        <button className="admin-btn">SIGN IN</button>
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
            {/* <Footer/> */}
        </div>
    );
}

export default SignIn;