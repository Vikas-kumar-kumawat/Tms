import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AllOrders from './components/AllOrders';
import Booking from './components/Booking';
import Diesel from './components/Diesel';
import Landing from './components/Landing';
import NewOrders from './components/NewOrders';
import Vehical from './components/Vehical';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/all-orders" element={<AllOrders />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/diesel" element={<Diesel />} />

        <Route path="/Landing" element={<Landing/>} />

        
        <Route path="/new-orders" element={<NewOrders />} />
        <Route path="/vehical" element={<Vehical />} />
      </Routes>
    </Router>
  );
}

export default App;