import React from "react";
import {Toast} from 'react-materialize'
import "./contact.css";

const Contact = () =>
  <div> 

<h5 style={{textAlign:'center'}}>YES INDEED, I'LL BE THERE TO ANSWER</h5>

  <div className="contact-container">

      <div  className="button-container">
        <Toast toast="Email: curtisglenn7@gmail.com">
          <i className="large  fa fa-envelope" ></i>
        </Toast>
      </div>

       <div className="button-container">
          <Toast toast="Phone Number: (919)-525-9862">
            <i className="large fa fa-phone" ></i>
          </Toast>
        </div>


      <div className="button-container">
        <a href="https://www.facebook.com/curtis.glenn.54" target="_blank" rel="noopener noreferrer" >
          <Toast toast='FaceBook'>
            <i className="large fa fa-facebook-official"></i>
          </Toast>
          </a>
      </div>

      <div className="button-container">
        <a href='https://www.youtube.com/channel/UCxMgWBmyNdoZcwi_J7PojlQ' target="_blank" rel="noopener noreferrer" >
          <Toast toast="YouTube">
          <i className="large fa fa-youtube-play" ></i>
          </Toast>
          </a>
      </div>

      <div className="button-container">
        <a href='https://www.linkedin.com/in/curtis-glenn-78755669/' target="_blank" rel="noopener noreferrer" >
          <Toast toast="LinkedIn">
            <i className="large fa fa-linkedin-square" ></i>
          </Toast>
        </a>
      </div>

      <div className="button-container">
        <a href='https://twitter.com/curtisglenn71' target="_blank" rel="noopener noreferrer" >
          <Toast toast="Twitter">
            <i className="large fa fa-twitter-square" ></i>
          </Toast>
        </a>
      </div>

    </div> 

  </div>;

export default Contact;