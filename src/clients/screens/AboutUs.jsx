import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsCSS from '../css/ContactUs.module.css';

const AboutUs = () => {
 
    return(
        <div className={ContactUsCSS.container}>
            <Header/>
            <div className={ContactUsCSS.imageContainer}> 
                <div className={ContactUsCSS.overlay}></div>
                <img className={ContactUsCSS.contactImage} src={require('../../assets/images/contactus.jpg')}/>
                <div className={ContactUsCSS.aboutUsText}>
                    <h2>MG Unli Wings & Ramshans Café</h2>
                    <p>Since our store was established on Manila East Road Brgy., 
                        we've had to make do with a small space. The development of Plaza Aldea, Tanay, Rizal,
                         MG Unli Wings, and Ramshans Cafe has been rejuvenated by the desire to prepare and 
                         serve solid and delicious wings, pastries, and drinks for dine-in and take-out.</p>
                    <p>MG Unli Wings & Ramshans Cafe, unlike other Unli Wings and Cafes, was established with
                         the purpose of presenting itself as something else.</p>
                    <p>We understand that many people enjoy unli-wings and coffee, but many of them dislike or
                         are uninformed about the commonly unsavory ingredients that make ordinary wings taste so good.</p>
                    <p>Our menu emphasizes items that make use of sound and aromatic flavors, but it overlooks the stuffed butter,
                         spread, oil, and overwhelming cream. </p>
                    <p>MG Unli Wings & Ramshans Cafe has expanded to include four excellent delivery locations in Tanay, Rizal, with more 
                        to come immediately. Our team is proud to be able to provide our new and returning customers with outstanding tasting 
                        Unli Wings and coffee that you won't find at any other restaurant.</p>
                    <p>We understand that some people are still looking for the standard unli wings and coffee, and that's fine with us. Our disclaimer is that 
                        MG Unli Wings & Ramshans Cafe was not the place for you if you're looking for overpowering, slick, unpleasant wings and coffee.</p>
                    <p>Our anticipation is that you will join the growing trend that so many others have discovered and try MG Unli Wings & Ramshans Cafe as a superior 
                        alternative to other wings and cafes, as well as any other good nourishment options available!</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;