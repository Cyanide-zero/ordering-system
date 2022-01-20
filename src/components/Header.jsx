import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom'


function Header(){
    return(
        <div className = "header">
            <div className="buttons-container">
                <Link className="button" to='/'><p>HOME</p></Link>
                <Link className="button" to='/category'><p>CATEGORY</p></Link>
                <Link className="button" to='/reservations'><p>RESERVATIONS</p></Link>
                <Link className="button" to='/contactus'><p>CONTACT US</p></Link>
            </div>

            <div className="header-title">
                WEBSITE TITLE
            </div>

            <div className = "logo-container">
                <p></p>
                <p></p>
            </div>
        </div>
    );

    
}

export default Header;
