import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Nav from './Main/Nav';
import Home from './Main/Home';
import Crypto from './Cryptocurrency/Crypto';
import Covid from './Covid/Covid';
import Login from './Login/Login';
import Nasa from './NasaAPI/Nasa';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className='w-100'>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Crypto" element={<Crypto/>}/>
        <Route path="/Covid" element={<Covid/>}/>
        <Route path="/Nasa" element={<Nasa/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
