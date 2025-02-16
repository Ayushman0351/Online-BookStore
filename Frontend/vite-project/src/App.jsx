import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Freebook from './components/Freebook';
import Home from './home/Home';
import { Route,Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';



export default function App() {
  return (
    <>
   {/* <Home/>
   <Course/> */}

  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>

   </Routes>
  
  </div>
    </>
  );
}
