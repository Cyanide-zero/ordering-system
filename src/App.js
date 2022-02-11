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
import OrderPage from './admins/screens/OrderPage';
import ProductManagement from './admins/screens/ProductManagement';
import AdminReservation from './admins/screens/AdminReservation';
import SalesReport from './admins/screens/SalesReport';
import Settings from './admins/screens/Settings';
import Profile from './admins/screens/Profile'


//User Landing Pages
import Home from './clients/screens/Home';
import Category from './clients/screens/Category';
import ContactUs from './clients/screens/ContactUs';
import Reservations from './clients/screens/Reservations';

//Category Pages
import Pizza from './clients/screens/CategoryScreens/Pizza';
import Desserts from './clients/screens/CategoryScreens/Desserts';
import Drinks from './clients/screens/CategoryScreens/Drinks';
import MainDishes from './clients/screens/CategoryScreens/MainDishes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* User Routes */}
          <Route path="/" exact element={<Home/>}/>
          <Route path="/category" exact element={<Category/>}/>
          <Route path="/reservations" exact element={<Reservations/>}/>
          <Route path="/contactus" exact element={<ContactUs/>}/>
          <Route path="/category/pizza" exact element={<Pizza/>}/>
          <Route path="/category/desserts" exact element={<Desserts/>}/>
          <Route path="/category/maindishes" exact element={<MainDishes/>}/>
          <Route path="/category/drinks" exact element={<Drinks/>}/>
          {/* Admin Routes */}
          <Route path="/admin/home" exact element={<AdminHome/>}/>
          <Route path="/admin/addproduct" exact element={<AddProduct/>}/>
          <Route path="/admin/account" exact element={<Accounts/>}/>
          <Route path="/admin/reservation" exact element={<AdminReservation/>}/>
          <Route path="/admin/order" exact element={<OrderPage/>}/>
          <Route path="/admin/products" exact element={<ProductManagement/>}/>
          <Route path="/admin/sales" exact element={<SalesReport/>}/>
          <Route path="/admin/profile" exact element={<Profile/>}/>
          <Route path="/admin/settings" exact element={<Settings/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
