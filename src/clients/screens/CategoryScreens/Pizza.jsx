import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';

import PizzaData from '../../../assets/Pizza.json'

function Pizza(){
    return(
        <div className = {CategoryCSS.container}>
            <Header/>
            <div className={CategoryCSS.pizzaContainer}>
            <div className={CategoryCSS.pizzaTop}>
                <h1>PIZZA</h1>
                {/* <p className={CategoryCSS.viewAllButton}>VIEW ALL</p> */}
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        PizzaData.map((post,index) =>{
                            return post.pizza.map(item => {
                                return(
                                    <Bcard
                                        key={item.id}
                                        food={item.menuName}
                                        folder={item.folder}
                                        // price={item.price}
                                    />
                                )
                            });
                        })
                    }
            </div>
        </div>
        </div>
    );
}

export default Pizza;