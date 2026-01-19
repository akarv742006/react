import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import MovieSection from './MovieSection';
import MoviePlayer from './MoviePlayer';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/movies/:id" element={<><Header /><MoviePlayer /><Footer /></>} />
            <Route path="/movies" element={<><Header /><MovieSection /><Footer /></>} />
            <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
            <Route path="/payment" element={<><Header /><Payment /><Footer /></>} />
            <Route path="/orders" element={<><Header /><Orders /><Footer /></>} />
            <Route path="/" element={<><Header /><Home /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
