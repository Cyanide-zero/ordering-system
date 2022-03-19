import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from '../css/Home.module.css';
import Scard from '../components/SmallCard';
import Bcard from '../components/BigCard';
import Header from '../components/Header';
import Footer from '../components/Footer';  
import Drinks from '../../assets/Drinks.json';
import axios from "axios";

function Home(){

    const [arr,setArr] = React.useState([])

    const getDrinks = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
            .then((response) => {
               setArr(response.data)
        });
    }
    
    React.useEffect(() => {
        getDrinks();
    }, []);

    return(
        <div className = {HomeCSS.home}>
            <Header/>
            <div className={HomeCSS.firstSection}>
                <div className={HomeCSS.homeTitle}>
                    MG UNLIWINGS &amp;<br/>
                    RAMSHAN'S CAFE
                    <p className={HomeCSS.italic}>lorem ipsum</p>
                    <button className={HomeCSS.titleButton}>ORDER NOW</button>
                </div>
                <img className={HomeCSS.pizzaBG} src={require('../../assets/images/pizza-no-bg.png')}/>
                <img className={HomeCSS.upArrow} src={require('../../assets/icons/up-arrow.png')}/>
                <p className={HomeCSS.italicAbsolute}>try it now</p>
                <div className={HomeCSS.circle}></div>
            </div>

            <div className={HomeCSS.secondSection}>
                <h1 className={HomeCSS.topSecond}>CATEGORIES</h1>
                <div className={HomeCSS.smallcardContainer}>
                    <Link to="/ordering-system/category/pizza" style={{textDecoration:"none"}}><Scard source="pizza" food = "PIZZA"/></Link>
                    <Link to="/ordering-system/category/maindishes" style={{textDecoration:"none"}}><Scard source="maindish"food = "MAIN DISHES"/></Link>
                    <Link to="/ordering-system/category/desserts" style={{textDecoration:"none"}}><Scard source="desserts"food = "DESSERTS"/></Link>
                    <Link to="/ordering-system/category/drinks" style={{textDecoration:"none"}}><Scard source="drinks"food = "DRINKS"/></Link>
                </div>  
            </div>

            <div className={HomeCSS.featuredProducts}>
                <div className={HomeCSS.featuredContainer}>
                    <div className={HomeCSS.topFeature}>
                        <h1>FEATURED PRODUCTS</h1>
                        <p className={HomeCSS.viewAllButton}>VIEW ALL</p>
                    </div>
                    <div className={HomeCSS.featuredButtonsContainer}>
                        <a className={HomeCSS.featuredButton}>NEW PRODUCTS</a>
                        <a className={HomeCSS.featuredButton}>BEST SELLERS</a>
                        <a className={HomeCSS.featuredButton}>ALL-TIME FAVORITES</a>
                    </div>
                </div>

                <div className={HomeCSS.bigcardContainer}>
                    {
                        arr.map((item, index) =>{
                            if(item.id<=4){
                                return(
                                        <Bcard
                                            key={item.id}
                                            food={item.menuName}
                                            price={item.price}
                                            folder={item.folder}
                                        />
                                    )
                            }
                        })
                    }
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
                    {/* <div className={HomeCSS.circle1}></div> */}
                    <img className={HomeCSS.resImage} src={require('../../assets/icons/reservation.png')}/>
                    <div className={HomeCSS.formGroupContainer}>
                        <h1  className={HomeCSS.reservationForm}>MAKE A RESERVATION</h1>
                        <p>For further questions, please contact us</p>
                        <form className={HomeCSS.schedForm}>
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
                        </form>
                        
                        <div className={HomeCSS.infoForm}>
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