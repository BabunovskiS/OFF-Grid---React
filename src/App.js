import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from "./components/layouts/Footer";


// Router
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Advanced from "./components/pages/Advanced";
import Ebook from "./components/pages/Ebook";
import Blog from "./components/pages/Blog";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Router>
              <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route exact path="/advanced" element={<Advanced />}/>
                  <Route exact path="/ebook" element={<Ebook />}/>
                  <Route exact path="/blog" element={<Blog />}/>

              </Routes>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
