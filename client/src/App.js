import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import Dashboard from './pages/Dashboard';
import Telegram from './pages/Telegram';
import Twitter from './pages/Twitter';
import UPI from './pages/UPI';
import Youtube from './pages/Youtube';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <div className="main-content">
      <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
     <Route path="/Telegram" element={<Telegram/>} />
      <Route path="/Twitter" element={<Twitter />} /> 
      <Route path="/UPI" element={<UPI />} /> 
      <Route path="/Youtube" element={<Youtube/>} /> 
       </Routes>
       </div>
     </Router>
    </div>
  
  );
}

export default App;
