import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import BodyImage from "./components/bodyImage/bodyImage";
import Wrapper from "./components/wrapper/wrapper";
import About from "./pages/about";
import Acting from "./pages/acting-out";
import Contact from "./pages/contact";
import Production from "./pages/production";
import Voiceovers from "./pages/voiceovers";



const App = () => 
  <Router>
    <div>
      <Navbar />
      <Wrapper>
      <BodyImage />
        <Route exact path="/about" component={About} />
        <Route exact path="/acting-out" component={Acting} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/production" component={Production} />
        <Route exact path="/voiceovers" component={Voiceovers} />
      </Wrapper>
    </div>
  </Router>
  ;

export default App;
