import React, { useState, useEffect } from 'react';
import HeaderCSS from '../css/Header.module.css';
import {Link, useLocation} from 'react-router-dom';


function Header(){
    const [toggle,setToggle] = useState(false)
    const location = useLocation();
    

    return(
        <div className = {HeaderCSS.container}>
            <div className={HeaderCSS.buttonsContainer}>
                <Link className={location.pathname == "/home" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/home'><p>HOME</p></Link>
                <Link className={location.pathname == "/category"? HeaderCSS.buttonActive : HeaderCSS.button} to='/category'><p>CATEGORY</p></Link>
                <Link className={location.pathname == "/reservations" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/reservations'><p>RESERVATIONS</p></Link>
                <Link className={location.pathname == "/contactus" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/contactus'><p>CONTACT US</p></Link>
            </div>

            <div className={HeaderCSS.headerTitle}>
                WEBSITE TITLE
            </div>

            <div className = {HeaderCSS.logoContainer}>
                <Link to="/order"><img className={HeaderCSS.logoIcon} src={require('../../assets/icons/shopping-cart-check.png')} alt="Logo" /></Link>
                <button onClick={()=>setToggle(!toggle)} onmo className={HeaderCSS.menuButton}>Menu</button>
                {toggle && (
                    <div className={HeaderCSS.dropDownContainer}>
                        <Link to="/" className={HeaderCSS.dropDownButton}
                             onClick={()=>{localStorage.setItem("dummyToken", 0)}}
                        >LOGOUT</Link>
                        <Link to="/" className={HeaderCSS.dropDownButton}>PROFILE</Link>
                    </div>
                )}
            </div>
        </div>
    );

    
}

export default Header;
