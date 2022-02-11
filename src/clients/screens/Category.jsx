import React from 'react';
import '../css/Category.css';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Category(){
    return(

    <div className = "categories-container">
        <Header/>
        <div className="categories-top">
            <h1 className = "boldtext">CATEGORIES</h1>
            <div className = "categories-buttons">
                <Link to='/category/pizza'><p>PIZZA</p></Link>
                <Link to='/category/maindishes'><p>MAIN DISHES</p></Link>
                <Link to='/category/desserts'><p>DESSERTS</p></Link>
                <Link to='/category/drinks'><p>DRINKS</p></Link>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Category;