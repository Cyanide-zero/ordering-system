import React from 'react';
import FooterCSS from '../css/Footer.module.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className={FooterCSS.container}>

            <div className={FooterCSS.title}>
                <h2>MG UNLIWINGS &amp;<br/>RAMSHAN'S CAFE</h2>
                <p>ⒸPhoto, Inc. 2019. We Love Our Users!</p>
            </div>

            <div>
                <div className={FooterCSS.buttonsContainer}>
                    <Link className={FooterCSS.button} to='/home'><p>HOME</p></Link>
                    <Link className={FooterCSS.button} to='/category'><p>CATEGORY</p></Link>
                    <Link className={FooterCSS.button} to='/reservations'><p>RESERVATIONS</p></Link>
                    <Link className={FooterCSS.button} to='/contactus'><p>CONTACT US</p></Link>
                </div>
                <div className={FooterCSS.rightSecond}>
                    <div className={FooterCSS.frs1}>
                        📧 Rambullstanay@yahoo.com
                    </div>
                    {/* <div className={FooterCSS.frs2}>
                        <button className={FooterCSS.regibutton}>REGISTER</button>
                        <button className={FooterCSS.loginbutton}>LOG IN</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;