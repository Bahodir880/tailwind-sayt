import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import './App.css'
import Header from './companents/Header';
import Malumot from './pages/Malumot';
import Servis from './pages/Servis';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/malumot' element={<Malumot />} />
          <Route path='/servis' element={<Servis />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
