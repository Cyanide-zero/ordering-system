import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';
import axios from 'axios';

function Drinks(){

    const [drinksArr, setDrinksArr] = React.useState([]);
    const [blended, setBlended] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
            .then((response) => {
            setDrinksArr(response.data);
        });
    }, [])

    return(
        <div className = {CategoryCSS.container}>
            <Header/>
            <div className={CategoryCSS.drinksContainer}>
            <div className={CategoryCSS.drinksTop}>
                <h1>DRINKS</h1>
                {/* <p className={CategoryCSS.viewAllButton}>VIEW ALL</p> */}
            </div>
            <div className={CategoryCSS.drinksRenderContainer}>
                    <div className={CategoryCSS.folderContainer}>
                        <h2>BLENDED SMOOTHIES</h2>
                        <div className={CategoryCSS.renderDrinks}>
                        {
                            drinksArr.map((item) =>{
                                if(item.folder === "blendedsmoothies"){
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
                    <div className={CategoryCSS.folderContainer}>
                        <h2>HANDCRAFTED</h2>
                        <div className={CategoryCSS.renderDrinks}>
                        {
                            drinksArr.map((item) =>{
                                if(item.folder === "handcrafted"){
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
                    <div className={CategoryCSS.folderContainer}>
                        <h2>HOT BEVERAGES</h2>
                        <div className={CategoryCSS.renderDrinks}>
                        {
                            drinksArr.map((item) =>{
                                if(item.folder === "hotbeverages"){
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
            </div>
        </div>
        </div>
    );
}

export default Drinks;