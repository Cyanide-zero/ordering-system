import React from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';
import axios from 'axios';

function Chicken(){
    const [chickenArr, setChickenArr] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://ordering-system-database.herokuapp.com/api/chicken/get")
            .then((response) => {
            setChickenArr(response.data);
        });
    }, []);

    return(
        <div className = {CategoryCSS.container}>
            <Header/>
            <div className={CategoryCSS.mainDishContainer}>
            <div className={CategoryCSS.mainDishTop}>
                <h1>CHICKEN</h1>
                {/* <p className={CategoryCSS.viewAllButton}>VIEW ALL</p> */}
            </div>
            <div className={CategoryCSS.bigcardContainer}>
                    {
                        chickenArr.map((item) =>{
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

export default Chicken;