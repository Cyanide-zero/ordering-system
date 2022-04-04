import React from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from '../css/Home.module.css';
import Scard from '../components/SmallCard';
import Bcard from '../components/BigCard';
import Header from '../components/Header';
import Footer from '../components/Footer';  
import Drinks from '../../assets/Drinks.json';
import axios from "axios";
import Swal from 'sweetalert2'

function Home(){
//for reservations
    const [addDate, setAddDate] = React.useState("");
    const [addTime, setAddTime] = React.useState("");
    const [addPartySize, setAddPartySize] = React.useState("");
    const [addName, setAddName] = React.useState("");
    const [addEmail, setAddEmail] = React.useState("");
    
    const [arr,setArr] = React.useState([])

    const addReservation = (e) =>{
        e.preventDefault();
        // console.log(addDate);
        // console.log(addTime);
        // console.log(addPartySize);
        // console.log(addName);
        // console.log(addEmail);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if(addDate ==="" || addTime === "" || addPartySize==="" || addName==="" ||  addEmail ===""){ 
            Swal.fire({
                title: 'Reservation Failed!',
                text: 'Please Complete the Form',
                icon: 'error',
                confirmButtonText: 'Try Again',
                customClass:{
                    icon: 'swalertIcon'
                }
            })
        }
        else {
            axios.post("https://ordering-system-database.herokuapp.com/api/reservations/get", {
                date: addDate,
                time: addTime,
                partysize: addPartySize,
                name: addName,
                emailaddress: addEmail
            }).then((response) => {
                console.log(response.data) 
            })
            Swal.fire({
                title: 'Reservation Created',
                text: 'Please wait on your email about the status of the reservation.',
                icon: 'success',
                timer:2000,
                showConfirmButton: false,
                customClass:{
                    icon: 'swalertIcon'
                }
            }).then((response) => {
                window.location.reload();
                })
        }
    }

    const getDrinks = () =>{
        axios.get("https://ordering-system-database.herokuapp.com/api/drinks/get")
            .then((response) => {
               setArr(response.data)
        });
    }
    
    React.useEffect(() => {
        getDrinks();
    }, []);

    return(
        <div className = {HomeCSS.home}>
            <Header/>
            <div className={HomeCSS.firstSection}>
                <div className={HomeCSS.homeTitle}>
                    MG UNLIWINGS &amp;<br/>
                    RAMSHAN'S CAFE
                    <p className={HomeCSS.italic}>INSERT DESCRIPTION HERE</p>
                    <button className={HomeCSS.titleButton}><Link to="/category" style={{textDecoration:"none"}}>ORDER NOW</Link></button>
                </div>
                <img className={HomeCSS.pizzaBG} src={require('../../assets/images/pizza-no-bg.png')}/>
                <img className={HomeCSS.upArrow} src={require('../../assets/icons/up-arrow.png')}/>
                <Link to="/category/pizza" style={{textDecoration:"none"}}><p className={HomeCSS.italicAbsolute}>try it now</p></Link>
                <div className={HomeCSS.circle}></div>
            </div>

            <div className={HomeCSS.secondSection}>
                <h1 className={HomeCSS.topSecond}>CATEGORIES</h1>
                <div className={HomeCSS.smallcardContainer}>
                    <Link to="/category/pizza" style={{textDecoration:"none"}}><Scard source="pizza" food = "PIZZA"/></Link>
                    <Link to="/category/appetizers" style={{textDecoration:"none"}}><Scard source="appetizer"food = "APPETIZER"/></Link>
                    <Link to="/category/pasta" style={{textDecoration:"none"}}><Scard source="pasta"food = "PASTA"/></Link>
                    <Link to="/category/drinks" style={{textDecoration:"none"}}><Scard source="drinks"food = "DRINKS"/></Link>
                    <Link to="/category/chicken" style={{textDecoration:"none"}}><Scard source="chicken"food = "CHICKEN"/></Link>
                </div>  
            </div>

            <div className={HomeCSS.featuredProducts}>
                <div className={HomeCSS.featuredContainer}>
                    <div className={HomeCSS.topFeature}>
                        <h1>FEATURED PRODUCTS</h1>
                        <p className={HomeCSS.viewAllButton}>VIEW ALL</p>
                    </div>
                    <div className={HomeCSS.featuredButtonsContainer}>
                        <a className={HomeCSS.featuredButton}>ALL-TIME FAVORITES</a>
                    </div>
                </div>

                <div className={HomeCSS.bigcardContainer}>
                    {
                        arr.map((item, index) =>{
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
                        })
                    }
                </div>
                {/* <div className = {HomeCSS.dots1}>
                    <p></p>
                    <p></p>
                </div> */}
            </div>

            <div className={HomeCSS.reservation}>
                <div className={HomeCSS.topReservation}>
                    <h1>BOOK A TABLE</h1>
                    
                </div>
                
                <div className={HomeCSS.mainReservation}>
                    {/* <div className={HomeCSS.circle1}></div> */}
                    <img className={HomeCSS.resImage} src={require('../../assets/icons/reservation.png')}/>
                    <div className={HomeCSS.formGroupContainer}>
                        <h1  className={HomeCSS.reservationForm}>MAKE A RESERVATION</h1>
                        <p>For further questions, please contact us</p>
                        <form className={HomeCSS.schedForm}>
                            <div className={HomeCSS.schedInputs}>
                                DATE
                                <input type="text" name="date" onChange={(e) => setAddDate(e.target.value)}/>
                            </div>
                            <div className={HomeCSS.schedInputs}>
                                TIME
                                <input type="text" name="time" onChange={(e) => setAddTime(e.target.value)}/>
                            </div>
                            <div className={HomeCSS.schedInputs}>
                                PARTY SIZE
                                <input type="text" name="size" onChange={(e) => setAddPartySize(e.target.value)}/>
                            </div>
                        </form>
                        
                        <div className={HomeCSS.infoForm}>
                            <p>NAME</p>
                            <input type="text" name="name" onChange={(e) => setAddName(e.target.value)}/>
                            <p>EMAIL ADDRESS</p>
                            <input type="text" name="email" onChange={(e) => setAddEmail(e.target.value)}/>
                        </div>
                        <button className={HomeCSS.formButton} onClick={addReservation}>
                            RESERVE NOW
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;