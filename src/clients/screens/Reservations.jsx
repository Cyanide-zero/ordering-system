import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationCSS from '../css/Reservation.module.css';

function Reservations(){
    return(
        <div className = "reservations-page">
            <Header/>
            <div className={ReservationCSS.mainReservation}>
                    <div className={ReservationCSS.formGroupContainer}>
                        <h1  className={ReservationCSS.reservationForm}>MAKE A RESERVATION</h1>
                        <p>For further questions, please contact us</p>
                        <div className={ReservationCSS.schedForm}>
                            <div className={ReservationCSS.schedInputs}>
                                DATE
                                <input type="text" name="date"/>
                            </div>
                            <div className={ReservationCSS.schedInputs}>
                                TIME
                                <input type="text" name="time"/>
                            </div>
                            <div className={ReservationCSS.schedInputs}>
                                PARTY SIZE
                                <input type="text" name="size"/>
                            </div>
                        </div>
                        
                        <div className={ReservationCSS.infoForm}>
                            <p>NAME</p>
                            <input type="text" name="name"/>
                            <p>EMAIL ADDRESS</p>
                            <input type="text" name="email"/>
                        </div>
                        <button className={ReservationCSS.formButton}>
                            RESERVE NOW
                        </button>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Reservations;