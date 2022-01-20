import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';

import Home from './screens/Home';
import Category from './screens/Category';
import ContactUs from './screens/ContactUs';
import Reservations from './screens/Reservations';

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
      </div>
    </Router>
  );
}

export default App;
