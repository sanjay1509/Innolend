import './App.css';
import React,{useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './Components/Footer/Footer';
import Navbarr from './Components/Navbar/Navbar';
import Invest from './Components/Invest/Invest';
import Borrow from './Components/Borrow/Borrow';
import Home from './Components/Home/Home';
import Insurance from './Components/insurance/Insurance';
import Knowledge from './Components/Knowledge/Knowledge';


function App() {

  useEffect(() => {
    AOS.init({duration:2000})
},[])

  return (
    <>
    
    <Navbarr/>
    
      <div data-aos="fade-up">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/borrow" element={<Borrow/>}/>
          <Route path="/invest" element={<Invest/>}/>
          <Route path="/insurance" element={<Insurance/>}/>
          <Route path="/knowledge" element={<Knowledge/>}/>
      </Routes>
     
      </div>
      <Footer/>
         

    </>
  );
}

export default App;
