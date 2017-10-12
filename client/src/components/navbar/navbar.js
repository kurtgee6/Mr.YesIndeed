import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class navbar extends Component {

   render () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Production">Production Shots</Link></li>
                            <li><Link to="/Voiceovers">Voiceovers</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/Acting">Acting Out!</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
   }
};

export default navbar;