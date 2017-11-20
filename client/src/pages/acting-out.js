import React from 'react';
import { Player } from 'video-react';
import {Row, Col} from 'react-materialize';
import "../../node_modules/video-react/dist/video-react.css";
import "./acting-out.css";

export default (props) => {
  return (
    <div>

      <Row>

      <Col s={6}>
      <h1>Willie B Dumped</h1>
          <Player>
            <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582427/movie-1_ammsqh.mp4" />
          </Player>
        </Col>
  

      <Col s={6}>
      <h1>Willie B Funny Monologue</h1>
        <Player>
          <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582435/movie-3_btaejz.mp4"/>
        </Player>
      </Col>

      </Row>

      <Row>

      <Col s={6}>
        <h1>Sad Monologue</h1>
          <Player>
            <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582338/movie-5_piywit.mp4" />
          </Player>
        </Col>

      <Col s={6}>
      <h1>Angry Monologue</h1>
        <Player>
          <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582319/movie-4_sycsrq.mp4" />
        </Player>
      </Col>

      </Row>


      <Row>

        <Col s={6}>
        <h1>Willie B Fired</h1>
        <Player>
          <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582431/movie-2_jzxdak.mp4" />
        </Player>
      </Col>

      <Col s={6}>
        <h1>Willie B Security</h1>
        <Player>
          <source src="http://res.cloudinary.com/dpeud2rab/video/upload/v1511098362/movie-6_bdak0g.mp4" />
        </Player>
      </Col>
    

      </Row>    

      <Row>

        <Col s={6}>
        <h1>Willie B Buffalo Wild Wing Challenge</h1>
        <Player>
          <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1511190529/The_Adventures_of_Willie_B._Clip_4_Willie_B_Blazin_take_1_n5zsrb.mp4" />
        </Player>
      </Col>

    

      </Row>    

    </div>
  );
};