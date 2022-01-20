import React from 'react';
import '../css/Home.css';
import Scard from '../components/SmallCard';
import Bcard from '../components/BigCard'

function Home(){
    return(
        <div className = "home">
            <div className="first-section">
                ORDER KA NA
                <div className = "dots">
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div className="second-section">
                <h1>CATEGORIES</h1>
                <div className="smallcard-container">
                    <Scard food = "Nilagang Palaka"/>
                    <Scard food = "Adobong Paniki"/>
                    <Scard food = "Pininyahang Kalabaw"/>
                    <Scard food = "Pinaupong Sawa"/>
                </div>  
            </div>

            <div className='featured-products'>
                <div className="featured-container">
                    <div className="top-feature">
                        <h1>FEATURED PRODUCTS</h1>
                        <p class="viewallbutton">VIEW ALL</p>
                    </div>
                    <div className='featured-buttons-container'>
                        <a class="featured-button">LOREM IPSUM</a>
                        <a class="featured-button">LOREM IPSUM</a>
                        <a class="featured-button">LOREM IPSUM</a>
                    </div>
                </div>

                <div className='bigcard-container'>
                    <Bcard food = "Malaking Burger" sub="Burger na super laki daw"/>
                    <Bcard food = "Maliit na Burger" sub="Burger na Juts"/>
                    <Bcard food = "French Fries" sub="Patatas ng mayaman"/>
                    <Bcard food = "French Kiss" sub="Halik ni Judas"/>
                </div>
                <div className = "dots1">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Home;