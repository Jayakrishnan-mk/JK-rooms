import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie'

import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Login from './pages/list/Login';
import Register from './components/register/Register';
import Adlogin from './pages/list/admLogin';
import HotelList from "./components/hotelList/HotelList";
import Hotel from "./pages/hotel/Hotel";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cookies] = useCookies([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<Hotel />} />

          <Route path="/admin" element={<Adlogin />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
