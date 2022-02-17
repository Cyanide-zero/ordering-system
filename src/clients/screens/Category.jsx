import React from 'react';
import CategoryCSS from '../css/Category.module.css';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Category(){
    return(

    <div className = {CategoryCSS.container}>
        <Header/>
        <div className={CategoryCSS.top}>
            <h1>CATEGORIES</h1>
            <div className = {CategoryCSS.buttons}>
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