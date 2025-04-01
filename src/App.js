import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ImageUploader from "./components/ImageUploader";
import Dashboard from "./components/Dashboard";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/grocery" element={<GroceryList />} />
      </Routes>
    </Router>
  );
}

export default App;
