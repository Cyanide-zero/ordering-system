import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Reservations(){
    return(
        <div className = "reservations-page">
            <Header/>
                <div className="">
                    Reservations
                </div>
            <Footer/>
        </div>
    );
}

export default Reservations;