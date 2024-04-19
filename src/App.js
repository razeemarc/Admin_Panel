import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';
import ResetPassword from './Pages/ResetPassword';
import Chitharal from './Pages/chitharal';
import MarunthuKottai from './Pages/MarunthuKottai';
import VattaKottai from './Pages/VattaKottai';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/chitharal" element={<Chitharal />} />
          <Route path="/marunthukottai" element={<MarunthuKottai />} />
         <Route path='/vattakottai' element={<VattaKottai/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
