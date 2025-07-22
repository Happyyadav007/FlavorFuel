import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationPage from './components/ReservationPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </div>
  );
};

export default App;
