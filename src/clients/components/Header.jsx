import React, {useState, useEffect } from 'react';
import HeaderCSS from '../css/Header.module.css';
import {Link, useLocation} from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';


function Header(){
    const [toggle,setToggle] = React.useState(false)
    const location = useLocation();

    const closeDropdown = () => {
        setToggle(false)
    }

    const Dropdown = () => {
        const ref = useDetectClickOutside({ onTriggered: closeDropdown });
        return (
            <div className={HeaderCSS.dropDownContainer} ref={ref}>
                <Link to="/ordering-system/" className={HeaderCSS.dropDownButton}
                    onClick={()=>{localStorage.setItem("dummyToken", 0)}}
                >LOGOUT</Link>
                {/* <Link to="/ordering-system/" className={HeaderCSS.dropDownButton}>PROFILE</Link> */}
            </div>
        );
    };

    
    

    return(
        <div className = {HeaderCSS.container}>
            <div className={HeaderCSS.buttonsContainer}>
                <Link className={location.pathname == "/ordering-system/home" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/ordering-system/home'><p>HOME</p></Link>
                <Link className={location.pathname == "/ordering-system/category"? HeaderCSS.buttonActive : HeaderCSS.button} to='/ordering-system/category'><p>CATEGORY</p></Link>
                <Link className={location.pathname == "/ordering-system/reservations" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/ordering-system/reservations'><p>RESERVATIONS</p></Link>
                <Link className={location.pathname == "/ordering-system/contactus" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/ordering-system/contactus'><p>CONTACT US</p></Link>
            </div>

            <div className={HeaderCSS.headerTitle}>
                WEBSITE TITLE
            </div>

            <div className = {HeaderCSS.logoContainer}>
                <Link to="/ordering-system/order"><img className={HeaderCSS.logoIcon} src={require('../../assets/icons/shopping-cart-check.png')} alt="Logo" /></Link>
                <button onClick={()=>setToggle(!toggle)} className={HeaderCSS.menuButton}>🔻</button>
                {toggle && <Dropdown/>}
            </div>
        </div>
    );

    
}

export default Header;
