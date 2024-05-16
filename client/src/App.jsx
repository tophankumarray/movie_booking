import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from './pages/MovieList';
import Navbar from './Components/NavBar/Navbar';
import AddMovie from './pages/AddMovie';
import Login from './Components/SignIn/Login';
import Signup from './Components/SignIn/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
