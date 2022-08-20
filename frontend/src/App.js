import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Login from './pages/list/Login';
import Register from './components/register/Register';
import Adlogin from './pages/list/admLogin';
import HotelList from "./components/hotelList/HotelList";
import Hotel from "./pages/hotel/Hotel";
import 'react-toastify/dist/ReactToastify.css';


import AdminHome from "./pages/admin/home/Home";
import List from "./pages/admin/list/List";
import Single from "./pages/admin/single/Single";

import Vhome from "./pages/vendor/Home";
import VendorRegister from './components/vendorRegister/VendorRegister'
import VendorHome from "./pages/vendorHome/Home"
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";



function App() {
  const { darkMode } = useContext(DarkModeContext);

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
          <Route path="/admin/home" element={<AdminHome />} />

          <Route path="/vendor/register" element={<VendorRegister />} />
          {/* <Route path="/vendor/login" element={<VendorHome />} /> */}
          <Route path="/vendor/home" element={<VendorHome />} />
          <Route path="/vendor" element={<Vhome />} />

        </Routes>
      </BrowserRouter>


      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/home" element={<adminHome />} />
            <Route path="/admin/login" element={<adminLogin />} />
            <Route path="/admin/userslist" element={<usersList />} />
            <Route path="/admin/users/:userId" element={<Single />} />
            
            <Route path="/admin/hotels" element={<List />} />
            <Route path="/admin/hotels/:hotelId" element={<Single />} />

          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
