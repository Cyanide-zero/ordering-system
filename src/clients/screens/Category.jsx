import React from 'react';
import CategoryCSS from '../css/Category.module.css';
import {Link} from 'react-router-dom';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bcard from '../components/BigCard';

//DATA IMPORTS
import Drinks from '../../assets/Drinks.json';
import MainDishes from '../../assets/MainDishes.json';
import Desserts from '../../assets/Desserts.json';
import Pizza from '../../assets/Pizza.json';


function Category(){
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
                        Pizza.map((post,index) =>{
                            return post.pizza.map(item => {
                                if(item.id<=2){
                                    return(
                                        <Bcard
                                            key={item.id}
                                            food={item.menuName}
                                            price={item.price}
                                            folder={item.folder}
                                        />
                                    )
                                }
                            });
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
                        MainDishes.map((post,index) =>{
                            return post.maindishes.map(item => {
                                if(item.id<=4){
                                    return(
                                        <Bcard
                                            key={item.id}
                                            food={item.menuName}
                                            folder={item.folder}
                                            // price={item.price}
                                        />
                                    )
                                }
                            });
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
                        Desserts.map((post,index) =>{
                            return post.desserts.map(item => {
                                if(item.id<=4){
                                    return(
                                        <Bcard
                                            key={item.id}
                                            food={item.menuName}
                                            folder={item.folder}
                                            // price={item.price}
                                        />
                                    )
                                }
                            });
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
                        Drinks.map((post,index) =>{
                            return post.drinks.map(item => {
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
                            });
                        })
                    }
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Category;