import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import {Link, useLocation} from 'react-router-dom';


function Header(){
    // const [url,setUrl] = useState('')
    // useEffect(() => {
    //     setUrl(window.location.pathname)
    //     console.log(url)
    // });

    const location = useLocation();
    
    useEffect(() => {
        console.log(location.pathname);
    });

    return(
        <div className = "header">
            <div className="buttons-container">
                <Link className={location.pathname == "/" ? "button-active" : "button" } to='/'><p>HOME</p></Link>
                <Link className={location.pathname == "/category"? "button-active": "button"} to='/category'><p>CATEGORY</p></Link>
                <Link className={location.pathname == "/reservations" ? "button-active" : "button" } to='/reservations'><p>RESERVATIONS</p></Link>
                <Link className={location.pathname == "/contactus" ? "button-active" : "button" } to='/contactus'><p>CONTACT US</p></Link>
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
