import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/list/Login';
import Hotel from './pages/hotel/Hotel';
import Register from './components/register/Register';
import Adlogin from './pages/list/admLogin';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/hotels/:id" element={<adLogin />} /> */}
    </Routes>
    </BrowserRouter>

    <BrowserRouter>
    <Routes>
    <Route path="/hotels" element={<Login />} />
    </Routes>
    </BrowserRouter>

    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Adlogin />} />
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
