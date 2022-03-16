import React, {useState, useEffect} from 'react';
import CategoryCSS from '../css/Category.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bcard from '../components/BigCard';

function Category(){
    const [drinksArr, setDrinksArr] = useState([]);
    const [dessertsArr, setDessertArr] = useState([]);
    const [pizzaArr, setPizzaArr] = useState([]);
    const [mainDishArr, setMainDishArr] = useState([]);

    const getMenu = () =>{
        axios.get("http://localhost:5000/api/drinks/get")
            .then((response) => {
               setDrinksArr(response.data)
        });
        axios.get("http://localhost:5000/api/maindishes/get")
            .then((response) => {
               setMainDishArr(response.data)
        });
        axios.get("http://localhost:5000/api/desserts/get")
            .then((response) => {
               setDessertArr(response.data)
        });
        axios.get("http://localhost:5000/api/pizza/get")
            .then((response) => {
               setPizzaArr(response.data)
        });
    }
    
    useEffect(() => {
        getMenu();
    }, []);

    return(
    <div className = {CategoryCSS.container}>
        <Header/>
        <div className={CategoryCSS.top}>
            <h1>CATEGORIES</h1>
            <div className = {CategoryCSS.buttons}>
                <Link to='/category/pizza'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/pizza.png')}/></Link>
                <Link to='/category/maindishes'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/maindish.png')}/></Link>
                <Link to='/category/desserts'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/desserts.png')}/></Link>
                <Link to='/category/drinks'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/drinks.png')}/></Link>
            </div>
        </div>
        <div className={CategoryCSS.pizzaContainer}>
            <div className={CategoryCSS.pizzaTop}>
                <h1>PIZZA</h1>
                <p className={CategoryCSS.viewAllButton}>VIEW ALL</p>
            </div>
            <div className={CategoryCSS.bigcardContainer}>
            {
                        pizzaArr.map((item, index) =>{
                                return(
                                    <Bcard
                                        key={item.id}
                                        food={item.menuName}
                                        price={item.price}
                                        folder={item.folder}
                                    />
                                )
                        })
                    }
            </div>
        </div>
        <div className={CategoryCSS.mainDishContainer}>
            <div className={CategoryCSS.mainDishTop}>
                <h1>MAIN DISHES</h1>
                <p className={CategoryCSS.viewAllButton}>VIEW ALL</p>
            </div>
            <div className={CategoryCSS.bigcardContainer}>
            {
                        mainDishArr.map((item, index) =>{
                                return(
                                    <Bcard
                                        key={item.id}
                                        food={item.menuName}
                                        price={item.price}
                                        folder={item.folder}
                                    />
                                )
                        })
                    }
            </div>
        </div>
        <div className={CategoryCSS.dessertsContainer}>
            <div className={CategoryCSS.dessertsTop}>
                <h1>DESSERTS</h1>
                <p className={CategoryCSS.viewAllButton}>VIEW ALL</p>
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        dessertsArr.map((item, index) =>{
                                return(
                                    <Bcard
                                        key={item.id}
                                        food={item.menuName}
                                        price={item.price}
                                        folder={item.folder}
                                    />
                                )
                        })
                    }
            </div>
        </div>
        <div className={CategoryCSS.drinksContainer}>
            <div className={CategoryCSS.drinksTop}>
                <h1>DRINKS</h1>
                <p className={CategoryCSS.viewAllButton}>VIEW ALL</p>
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        drinksArr.map((item, index) =>{
                                return(
                                    <Bcard
                                        key={item.id}
                                        food={item.menuName}
                                        price={item.price}
                                        folder={item.folder}
                                    />
                                )
                        })
                    }
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Category;