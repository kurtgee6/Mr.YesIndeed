import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import About from "./pages/about";
import Acting from "./pages/acting-out";
import Contact from "./pages/contact";
import Production from "./pages/production";
import Voiceovers from "./pages/voiceovers";
import Home from "./pages/home";



const App = () => 
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/acting" component={Acting} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/production" component={Production} />
        <Route exact path="/voiceovers" component={Voiceovers} />
    </div>
  </Router>
  ;

export default App;
