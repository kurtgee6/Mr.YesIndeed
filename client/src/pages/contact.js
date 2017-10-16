import React from "react";
import {Toast} from 'react-materialize'
import "./contact.css";

const Contact = () =>
  <div>
     <div id="main-picture"></div>


        <Toast toast="hello">
          <i className="large material-icons fa fa-envelope" ></i>
        </Toast>

        <Toast toast="hello">
          <i className="large material-icons fa fa-phone" ></i>
        </Toast>

        <Toast toast="hello">
          <i className="large material-icons fa fa-facebook-official"></i>
        </Toast>

        <Toast toast="hello">
         <i className="large material-icons fa fa-youtube-play" ></i>
        </Toast>

        <Toast toast="hello">
          <i className="large material-icons fa fa-linkedin-square" ></i>
        </Toast>

        <Toast toast="hello">
          <i className="large material-icons fa fa-twitter-square" ></i>
        </Toast>

  </div>;

export default Contact;