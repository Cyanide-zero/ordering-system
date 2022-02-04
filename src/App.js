import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './clients/components/Header';
import Footer from './clients/components/Footer'

import Home from './clients/screens/Home';
import Category from './clients/screens/Category';
import ContactUs from './clients/screens/ContactUs';
import Reservations from './clients/screens/Reservations';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/category" exact element={<Category/>}/>
          <Route path="/reservations" exact element={<Reservations/>}/>
          <Route path="/contactus" exact element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
