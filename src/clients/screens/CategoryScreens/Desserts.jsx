import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import CategoryCSS from '../../css/Category.module.css'
import Bcard from '../../components/BigCard';
import axios from 'axios'

function Desserts(){

    const [dessertsArr, setDessertArr] = useState([]);

    useEffect(() => {
        axios.get("https://ordering-system-database.herokuapp.com/api/desserts/get")
            .then((response) => {
            setDessertArr(response.data);
        });
    }, [])
    

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
                        dessertsArr.map((item) =>{
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
        </div>
    );
}

export default Desserts;