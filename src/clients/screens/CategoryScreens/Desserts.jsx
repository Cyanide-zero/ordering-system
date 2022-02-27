import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';

import DessertsData from '../../../assets/Desserts.json'

function Desserts(){
    return(
        <div className = {CategoryCSS.container}>
            <Header/>
            <div className={CategoryCSS.dessertsContainer}>
            <div className={CategoryCSS.dessertsTop}>
                <h1>DESSERTS</h1>
                {/* <p className={CategoryCSS.viewAllButton}>VIEW ALL</p> */}
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        DessertsData.map((post,index) =>{
                            return post.desserts.map(item => {
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

export default Desserts;