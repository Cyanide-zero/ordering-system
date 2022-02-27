import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';

import DrinksData from '../../../assets/Drinks.json'

function Drinks(){
    return(
        <div className = {CategoryCSS.container}>
            <Header/>
            <div className={CategoryCSS.drinksContainer}>
            <div className={CategoryCSS.drinksTop}>
                <h1>DRINKS</h1>
                {/* <p className={CategoryCSS.viewAllButton}>VIEW ALL</p> */}
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        DrinksData.map((post,index) =>{
                            return post.drinks.map(item => {
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

export default Drinks;