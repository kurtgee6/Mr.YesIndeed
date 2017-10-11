import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {

   render () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile">
                            <li><a href="#">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="#">Production Shots</a></li>
                            <li><a href="#">Voiceovers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Acting Out!</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
   }
};

export default navbar;