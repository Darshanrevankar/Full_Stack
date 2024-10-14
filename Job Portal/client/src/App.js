import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import Alljobs from './components/Jobs/Alljobs';
import Jobdetails from './components/Jobs/Jobdetails';
import Login from './components/Login/Login';
import Postjob from './components/Jobs/Postjob';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/Postjob" element={<Postjob/>} />
          <Route path="/Alljobs" element={<Alljobs/>} /> 
          <Route path="/Jobdetails" element={<Jobdetails/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
