import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {

   render () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">about</a></li>
                            <li><a href="#">photo/resume</a></li>
                            <li><a href="#">production shots</a></li>
                            <li><a href="#">videos</a></li>
                            <li><a href="#">contact</a></li>
                            <li><a href="#">acting out!</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
   }
};

export default navbar;