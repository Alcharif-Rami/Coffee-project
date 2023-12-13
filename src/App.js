import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import origins from "./components/pages/Origins";
import rating from "./components/pages/Rating";
import brewing from "./components/pages/Brewing";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/origins" Component={origins} />
          <Route path="/rating" Component={rating} />
          <Route path="/brewing" Component={brewing} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
