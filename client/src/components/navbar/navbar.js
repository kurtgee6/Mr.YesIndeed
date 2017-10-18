import React, { Component } from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./navbar.css";

class navbar extends Component {

   render () {
        return (
            
        <Navbar left>
            <NavItem href='/'>Home</NavItem>
            <NavItem href="/About">About</NavItem>
            <NavItem href="/Production">Production Shots</NavItem>
            <NavItem href="/Voiceovers">Voiceovers</NavItem>
            <NavItem href="/Contact">Contact</NavItem>
            <NavItem href="/Acting">Acting Out</NavItem>
        </Navbar>
           
        )
   }
};

export default navbar;
