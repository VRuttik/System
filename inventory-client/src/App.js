import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Footer from './components/Footer';
import Inventory from './pages/InventoryDashboard';
import Expenses from './pages/ExpensesDashboard';
import Donor from './pages/DonorDashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={Main} />
          <Route path="/inventorydashboard" element={<Inventory />} />
          <Route path="/expensesdashboard" element={<Expenses />} />
          <Route path="/donordashboard" element={<Donor />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

