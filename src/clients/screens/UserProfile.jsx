import React from "react";
import '../css/UserProfile.css';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';

function UserProfile (){
    return(
        <div className="container">
            <Header/>
            <div className="profile">
                <div className="main-info">
                    <div className="profile-image"></div>
                    <h3>NAME</h3>
                    <h3>EMAIL ADDRESS</h3>
                </div>

                <div className="sub-info">
                    <div className="address">
                        <h3>DEFAULT ADDRESS</h3>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                    
                    <div className="contactnumber">
                        <h3>CONTACT NUMBER</h3>
                        <p>09123456789</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;