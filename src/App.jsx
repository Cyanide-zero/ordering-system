import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Admin Landing Pages
import AdminHome from './admins/screens/AdminHome';
import Accounts from './admins/screens/Accounts';
import AddProduct from './admins/screens/AddProduct';
import EditProduct from './admins/screens/EditProduct';
import OrderPage from './admins/screens/OrderPage';
import DetailedOrder from './admins/screens/DetailedOrder';
import ProductManagement from './admins/screens/ProductManagement';
import AdminReservation from './admins/screens/AdminReservation';
import ReservationDetails from './admins/screens/ReservationDetails';
import SalesReport from './admins/screens/SalesReport';
import DetailedSalesReport from './admins/screens/DetailedSalesReport';
import Settings from './admins/screens/Settings';
import Profile from './admins/screens/Profile';


//User Landing Pages
import Home from './clients/screens/Home';
import Category from './clients/screens/Category';
import ContactUs from './clients/screens/ContactUs';
import EditProfile from './clients/screens/EditProfile';
import Order from './clients/screens/Order';
import OrderStatus from './clients/screens/OrderStatus';
import Reservations from './clients/screens/Reservations';
import SignIn from './clients/screens/SignIn';
import UserProfile from './clients/screens/UserProfile';


//Category Pages
import Pizza from './clients/screens/CategoryScreens/Pizza';
import Desserts from './clients/screens/CategoryScreens/Desserts';
import Drinks from './clients/screens/CategoryScreens/Drinks';
import MainDishes from './clients/screens/CategoryScreens/MainDishes';

function App() {
  const [token,setToken] = React.useState(0);
  const [admin,setAdmin] = React.useState(0);
  const refreshPage = () => {
    window.location.reload();
  }

  React.useEffect(() => {
    let getToken = localStorage.getItem("dummyToken");
    setToken(parseInt(getToken));
    let getAdminToken = localStorage.getItem("adminDummyToken");
    setAdmin(parseInt(getAdminToken));
  });
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* User Routes */}
          {
            token===1?
            (
              <>
                <Route path="/" exact element={<SignIn/>}/>
                <Route path="/category" exact element={<Category/>}/>
                <Route path="/reservations" exact element={<Reservations/>}/>
                <Route path="/contactus" exact element={<ContactUs/>}/>
                <Route path="/editprofile" exact element={<EditProfile/>}/>
                <Route path="/order" exact element={<Order/>}/>
                <Route path="/home" exact element={<Home/>}/>
                <Route path="/profile" exact element={<UserProfile/>}/>
                <Route path="/category/pizza" exact element={<Pizza/>}/>
                <Route path="/category/desserts" exact element={<Desserts/>}/>
                <Route path="/category/maindishes" exact element={<MainDishes/>}/>
                <Route path="/category/drinks" exact element={<Drinks/>}/>
              </>
            ):(
              <Route path="/*" exact element={<SignIn/>}/>
            )
          }
          {/* Admin Routes */}
          {
            admin===1?
            (<>
              <Route path="/admin" exact element={<AdminHome/>}/>
              <Route path="/admin/addproduct" exact element={<AddProduct/>}/>
              <Route path="/admin/editproduct" exact element={<EditProduct/>}/>
              <Route path="/admin/account" exact element={<Accounts/>}/>
              <Route path="/admin/reservation" exact element={<AdminReservation/>}/>
              <Route path="/admin/reservationdetails" exact element={<ReservationDetails/>}/>
              <Route path="/admin/order" exact element={<OrderPage/>}/>
              <Route path="/admin/orderdetails" exact element={<DetailedOrder/>}/>
              <Route path="/admin/products" exact element={<ProductManagement/>}/>
              <Route path="/admin/sales" exact element={<SalesReport/>}/>
              <Route path="/admin/detailedsales" exact element={<DetailedSalesReport/>}/>
              <Route path="/admin/profile" exact element={<Profile/>}/>
              <Route path="/admin/settings" exact element={<Settings/>}/>
            </>):(
              <Route path="/admin/*" exact element={<AdminHome/>}/>
            )
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
