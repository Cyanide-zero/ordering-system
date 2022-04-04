import React from 'react';
import CategoryCSS from '../css/Category.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

//COMPONENT IMPORTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bcard from '../components/BigCard';

function Category(){
    const [drinksArr, setDrinksArr] = React.useState([]);
    const [appetizerArr, setAppetizerArr] = React.useState([]);
    const [pizzaArr, setPizzaArr] = React.useState([]);
    const [pastaArr, setPastaArr] = React.useState([]);
    const [chickenArr, setChickenArr] = React.useState([]);

    const getMenu = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
            .then((response) => {
               setDrinksArr(response.data)
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/pasta/get")
            .then((response) => {
               setPastaArr(response.data)
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/appetizer/get")
            .then((response) => {
               setAppetizerArr(response.data)
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/pizza/get")
            .then((response) => {
               setPizzaArr(response.data)
        });
        axios.get("https://ordering-system-database.herokuapp.com/api/chicken/get")
            .then((response) => {
               setChickenArr(response.data)
        });
    }
    
    React.useEffect(() => {
        getMenu();
    }, []);

    return(
    <div className = {CategoryCSS.container}>
        <Header/>
        <div className={CategoryCSS.top}>
            <h1>CATEGORIES</h1>
            <div className = {CategoryCSS.buttons}>
                <Link to='/category/pizza'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/pizza.png')}/></Link>
                <Link to='/category/appetizers'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/appetizer.png')}/></Link>
                <Link to='/category/desserts'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/pasta.png')}/></Link>
                <Link to='/category/drinks'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/drinks.png')}/></Link>
                <Link to='/category/chicken'><img className={CategoryCSS.buttonIcon} src={require('../../assets/icons/chicken.png')}/></Link>
            </div>
        </div>
        <div className={CategoryCSS.pizzaContainer}>
            <div className={CategoryCSS.pizzaTop}>
                <h1>PIZZA</h1>
                
            </div>
            <div className={CategoryCSS.bigcardContainer}>
            {
                        pizzaArr.map((item, index) =>{
                            if(item.id <= 4){
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
        </div>
        <div className={CategoryCSS.mainDishContainer}>
            <div className={CategoryCSS.mainDishTop}>
                <h1>PASTA</h1>
                
            </div>
            <div className={CategoryCSS.bigcardContainer}>
            { 
                        pastaArr.map((item, index) =>{
                            if(item.id <= 4){
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
        </div>
        <div className={CategoryCSS.dessertsContainer}>
            <div className={CategoryCSS.dessertsTop}>
                <h1>APPETIZERS</h1>
                
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        appetizerArr.map((item, index) =>{
                            if(item.id <= 4){
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
        </div>
        <div className={CategoryCSS.dessertsContainer}>
            <div className={CategoryCSS.dessertsTop}>
                <h1>CHICKEN</h1>
                
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        chickenArr.map((item, index) =>{
                            if(item.id <= 4){
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
        </div>
        <div className={CategoryCSS.drinksContainer}>
            <div className={CategoryCSS.drinksTop}>
                <h1>DRINKS</h1>
                
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        drinksArr.map((item, index) =>{
                            if(item.id <= 4){
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
        </div>
        <Footer/>
    </div>
    );
}

export default Category;