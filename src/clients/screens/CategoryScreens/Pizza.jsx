import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';
import axios from 'axios';

function Pizza(){
    const [pizzaArr, setPizzaArr] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://ordering-system-database.herokuapp.com/api/pizza/get")
            .then((response) => {
            setPizzaArr(response.data);
        });
    }, []);
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
                        pizzaArr.map((item) =>{
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
        </div>
    );
}

export default Pizza;