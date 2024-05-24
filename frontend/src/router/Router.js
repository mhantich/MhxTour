import React, { useContext } from 'react'
import  {Routes,Route,Navigate } from "react-router-dom";
import Home from '../Pages/Home';
import SearchList from '../Pages/SearchList';
import Login from '../Pages/Login';
import Regester from '../Pages/Regester';
import Tour from '../Pages/Tour';
import TourDetalis from '../Pages/TourDetalis';
import Thanks from '../Pages/Thanks';
import { AuthContext } from '../context/AuthContext';
import About from '../Pages/About';


function Router() {
  const {user}=useContext(AuthContext)
  return (
        <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/Login" element={user ? <Navigate to="/" /> : <Login/>}/> 
             <Route path="/Regester" element={<Regester/>}/> 
             <Route path="/about" element={<About/>}/> 
             <Route path="/Tour" element={<Tour/>}/> 
             <Route path="/Tour/SearchList" element={<SearchList/>}/> 
             <Route path="/Tour/:id" element={<TourDetalis/>}/> 
             <Route path="/succsed" element={<Thanks/>} />
      
   
        </Routes>
  
  )
}

export default Router