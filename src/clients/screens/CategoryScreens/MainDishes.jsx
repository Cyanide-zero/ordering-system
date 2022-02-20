import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';

import MainDishesData from '../../../assets/MainDishes.json'

function MainDishes(){
    return(
        <div className = {CategoryCSS.container}>
            <Header/>
            <div className={CategoryCSS.mainDishContainer}>
            <div className={CategoryCSS.mainDishTop}>
                <h1>MAIN DISHES</h1>
                <p className={CategoryCSS.viewAllButton}>VIEW ALL</p>
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        MainDishesData.map((post,index) =>{
                            return post.maindishes.map(item => {
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

export default MainDishes;