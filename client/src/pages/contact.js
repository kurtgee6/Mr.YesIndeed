import React from "react";
import "./contact.css";

const Contact = () =>
  <div>
     <div id="main-picture"></div>

    <div className="contact-container">

      <a id="email" className="btn btn-floating btn-large" > <i className="large material-icons fa fa-envelope" ></i></a>

      <a id="phone" className="btn btn-floating btn-large" > <i className="large material-icons fa fa-phone" ></i></a>

      <a id="facebook" className="btn btn-floating btn-large" > <i className="large material-icons fa fa-facebook-official" ></i></a>

      <a id="youtube" className="btn btn-floating btn-large" > <i className="large material-icons fa fa-youtube-play" ></i></a>

      <a id="linked" className="btn btn-floating btn-large" > <i className="large material-icons fa fa-linkedin-square" ></i></a>

      <a id="twitter" className="btn btn-floating btn-large" > <i className="large material-icons fa fa-twitter-square" ></i></a>

    </div>

  </div>;

export default Contact;