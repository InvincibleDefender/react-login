import React, { useState } from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Logout from './components/Logout';
import NotesList from './components/NoteList';
import ProfileDashboard from './components/ProfileDashboard';
import AddBlog from './components/AddBlog';
import DetailedBlog from './components/DetailedBlog';




const App = () => {
  const [alert, setAlert] = useState({});


  const handleCloseAlert = () => {
    showAlert();
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  return (
    <>
    
    <BrowserRouter>
    <Navbar alert={alert} onClose={handleCloseAlert}/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login showAlert={showAlert} onClose={handleCloseAlert} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/blogs" element={<NotesList />} />
          <Route path="/dashboard" element={<ProfileDashboard />} />
          <Route path="/add-blog" element={<AddBlog showAlert={showAlert} />} />
          <Route path="/blog/:blogTitle" element={<DetailedBlog />} />
          <Route path="/logout" element={<Logout showAlert={showAlert} onClose={handleCloseAlert}/>} />


      </Routes>

    </BrowserRouter>
    </>
    

   
  );
};

export default App;
