import { Route, Routes } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
