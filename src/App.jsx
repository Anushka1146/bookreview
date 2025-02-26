import React from 'react';
import LandingPage from './LandingPage';
import Login from './login';
import SignUpPage from './signuppage';
import HomePage from './homepage';
import Cart from './cart'
import SettingsPage from './settingspage';
import BookPage from './bookpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signuppage" element={<SignUpPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/settingspage" element={<SettingsPage />} />
      <Route path="/books/:title" element={<BookPage />} />

    </Routes>
   </Router>
  );
};

export default App;

