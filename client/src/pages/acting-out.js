import React from 'react';
import { Player } from 'video-react';
import {Row, Col} from 'react-materialize';
import "./acting-out.css";

export default (props) => {
  return (
    <div>

      <Row>

      <Col s={6}>
      <h1>Willie B</h1>
          <Player>
            <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582427/movie-1_ammsqh.mp4" />
          </Player>
        </Col>
  

      <Col s={6}>
      <h1>Willie B</h1>
        <Player>
          <source src="http://res.cloudinary.com/dpeud2rab/video/upload/v1509582435/movie-3_btaejz.mp4"/>
        </Player>
      </Col>

      </Row>

      <Row>

      <Col s={6}>
        <h1>Willie B</h1>
          <Player>
            <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582338/movie-5_piywit.mp4" />
          </Player>
        </Col>

      <Col s={6}>
      <h1>Willie B</h1>
        <Player>
          <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582319/movie-4_sycsrq.mp4" />
        </Player>
      </Col>

      </Row>


      <Row>

        <Col s={6}>
        <h1>Willie B</h1>
        <Player>
          <source src="https://res.cloudinary.com/dpeud2rab/video/upload/v1509582431/movie-2_jzxdak.mp4" />
        </Player>
      </Col>

    

      </Row>    

    </div>
  );
};