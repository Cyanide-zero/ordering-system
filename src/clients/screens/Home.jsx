import React from 'react';
import HomeCSS from '../css/Home.module.css';
import Scard from '../components/SmallCard';
import Bcard from '../components/BigCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home(){
    return(
        <div className = "home">
            <Header/>
            <div className={HomeCSS.firstSection}>
                ORDER KA NA
                <div className = {HomeCSS.dots}>
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div className={HomeCSS.secondSection}>
                <h1 class={HomeCSS.topSecond}>CATEGORIES</h1>
                <div className={HomeCSS.smallcardContainer}>
                    <Scard food = "PIZZA"/>
                    <Scard food = "MAIN DISHES"/>
                    <Scard food = "DESSERTS"/>
                    <Scard food = "DRINKS"/>
                </div>  
            </div>

            <div className={HomeCSS.featuredProducts}>
                <div className={HomeCSS.featuredContainer}>
                    <div className={HomeCSS.topFeature}>
                        <h1>FEATURED PRODUCTS</h1>
                        <p>VIEW ALL</p>
                    </div>
                    <div className={HomeCSS.featuredButtonsContainer}>
                        <a className={HomeCSS.featuredButton}>NEW PRODUCTS</a>
                        <a className={HomeCSS.featuredButton}>BEST SELLERS</a>
                        <a className={HomeCSS.featuredButton}>ALL-TIME FAVORITES</a>
                    </div>
                </div>

                <div className={HomeCSS.bigcardContainer}>
                    <Bcard food = "Malaking Burger" price = "P 69.42" sub="Burger na super laki daw"/>
                    <Bcard food = "Maliit na Burger" price = "P 6.66" sub="Burger na Juts"/>
                    <Bcard food = "French Fries" sub="Patatas ng mayaman"/>
                    <Bcard food = "French Kiss" sub="Halik ni Judas"/>
                </div>
                <div className = {HomeCSS.dots1}>
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div className={HomeCSS.reservation}>
                <div className={HomeCSS.topReservation}>
                    <h1>BOOK A TABLE</h1>
                </div>

                <div className={HomeCSS.mainReservation}>
                    <p className={HomeCSS.square}></p>
                    <div class={HomeCSS.formGroupContainer}>
                        <h1  className={HomeCSS.reservationForm}>MAKE A RESERVATION</h1>
                        <p>For further questions, please contact us</p>
                        <div className={HomeCSS.schedForm}>
                            <div className={HomeCSS.schedInputs}>
                                DATE
                                <input type="text" name="date"/>
                            </div>
                            <div className={HomeCSS.schedInputs}>
                                TIME
                                <input type="text" name="time"/>
                            </div>
                            <div className={HomeCSS.schedInputs}>
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
                        <button className={HomeCSS.formButton}>
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