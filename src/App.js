import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import

import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';
import ResetPassword from './Pages/ResetPassword';
import Chitharal from './Pages/chitharal';
import Marunthukootai from './Pages/marunthukootai';
import Suchindram from './Pages/suchindram';
function App() {
  return (
    <div>
      <Router> {/* Wrap your routes with the Router component */}
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/chitharal" element={<Chitharal />} />
          <Route path="/marunthukootai" element={<Marunthukootai />} />
          <Route path="/suchindram" element={<Suchindram />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
