import React from 'react';
import HeaderCSS from '../css/Header.module.css';
import {Link, useLocation} from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import {AiFillContacts, 
        AiOutlineShoppingCart,
        AiFillHome,
        AiFillSchedule,
        AiOutlineLogout
    } from 'react-icons/ai';
import {MdCategory} from 'react-icons/md';


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
                <Link to="/" className={HeaderCSS.dropDownButton}
                    onClick={()=>{
                        localStorage.clear();
                    }}
                >LOGOUT</Link>
                {/* <Link to="/" className={HeaderCSS.dropDownButton}>PROFILE</Link> */}
            </div>
        );
    };

    
    

    return(
        <div className = {HeaderCSS.container}>
            <div className={HeaderCSS.buttonsContainer}>
                <Link className={location.pathname === "/home" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/home'><p>HOME</p></Link>
                <Link className={location.pathname === "/home" ? HeaderCSS.buttonActiveMobile : HeaderCSS.buttonMobile } to='/home'><p><AiFillHome/></p></Link>
                <Link className={location.pathname === "/category"? HeaderCSS.buttonActive : HeaderCSS.button} to='/category'><p>CATEGORY</p></Link>
                <Link className={location.pathname === "/category" ? HeaderCSS.buttonActiveMobile : HeaderCSS.buttonMobile } to='/category'><p><MdCategory/></p></Link>
                <Link className={location.pathname === "/reservations" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/reservations'><p>RESERVATIONS</p></Link>
                <Link className={location.pathname === "/reservations" ? HeaderCSS.buttonActiveMobile : HeaderCSS.buttonMobile } to='/reservations'><p><AiFillSchedule/></p></Link>
                <Link className={location.pathname === "/contactus" ? HeaderCSS.buttonActive : HeaderCSS.button } to='/contactus'><p>CONTACT US</p></Link>
                <Link className={location.pathname === "/contactus" ? HeaderCSS.buttonActiveMobile : HeaderCSS.buttonMobile } to='/contactus'><p><AiFillContacts/></p></Link>
            </div>

            <div className={HeaderCSS.headerTitle}>
                <Link className={HeaderCSS.headerText} to="/aboutus" style={{textDecoration:"none",color:'black'}}>MG and Ramshan's</Link>
                <Link className={HeaderCSS.headerTextMobile} to="/aboutus" style={{textDecoration:"none",color:'black'}}>
                    <img src={require('../../assets/images/mglogo.png')}/>
                </Link>
            </div>
            

            <div className = {HeaderCSS.logoContainer}>
                <Link to="/order"><img className={HeaderCSS.logoIcon} src={require('../../assets/icons/shopping-cart-check.png')} alt="Logo" /></Link>
                <Link to="/order" className={location.pathname === "/order" ? HeaderCSS.buttonActiveMobile : HeaderCSS.buttonMobile }><AiOutlineShoppingCart/></Link>
                <Link to="/" ><button onClick={()=>{localStorage.clear();}} className={HeaderCSS.menuButton}><AiOutlineLogout size={"20pt"}/></button></Link>
                <Link to="/" onClick={()=>{localStorage.clear();}} className={HeaderCSS.buttonMobile}><AiOutlineLogout/></Link>
                {toggle && <Dropdown/>}
            </div>
        </div>
    );

    
}

export default Header;
