import React from 'react';
import '../css/Home.css';
import Scard from '../components/SmallCard';
import Bcard from '../components/BigCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home(){
    return(
        <div className = "home">
            <Header/>
            <div className="first-section">
                ORDER KA NA
                <div className = "dots">
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div className="second-section">
                <h1 class="top-second">CATEGORIES</h1>
                <div className="smallcard-container">
                    <Scard food = "PIZZA"/>
                    <Scard food = "MAIN DISHES"/>
                    <Scard food = "DESSERTS"/>
                    <Scard food = "DRINKS"/>
                </div>  
            </div>

            <div className='featured-products'>
                <div className="featured-container">
                    <div className="top-feature">
                        <h1>FEATURED PRODUCTS</h1>
                        <p class="viewallbutton">VIEW ALL</p>
                    </div>
                    <div className='featured-buttons-container'>
                        <a class="featured-button">NEW PRODUCTS</a>
                        <a class="featured-button">BEST SELLERS</a>
                        <a class="featured-button">ALL-TIME FAVORITES</a>
                    </div>
                </div>

                <div className='bigcard-container'>
                    <Bcard food = "Malaking Burger" price = "P 69.42" sub="Burger na super laki daw"/>
                    <Bcard food = "Maliit na Burger" price = "P 6.66" sub="Burger na Juts"/>
                    <Bcard food = "French Fries" sub="Patatas ng mayaman"/>
                    <Bcard food = "French Kiss" sub="Halik ni Judas"/>
                </div>
                <div className = "dots1">
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div className="reservation">
                <div className="top-reservation">
                    <h1>BOOK A TABLE</h1>
                </div>

                <div className='main-reservation'>
                    <p className="square"></p>
                    <div class="form-group-container">
                        <h1  className="reservationform">MAKE A RESERVATION</h1>
                        <p>For further questions, please contact us</p>
                        <div className='sched-form'>
                            <div className="sched-inputs">
                                DATE
                                <input type="text" name="date"/>
                            </div>
                            <div className="sched-inputs">
                                TIME
                                <input type="text" name="time"/>
                            </div>
                            <div className="sched-inputs">
                                PARTY SIZE
                                <input type="text" name="size"/>
                            </div>
                        </div>
                        
                        <div className='info-form'>
                            <p>NAME</p>
                            <input type="text" name="name"/>
                            <p>EMAIL ADDRESS</p>
                            <input type="text" name="email"/>
                        </div>
                        <button className='form-button'>
                            RESERVE NOW
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;