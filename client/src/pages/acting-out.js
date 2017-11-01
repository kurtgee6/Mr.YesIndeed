import React from 'react';
import { Player } from 'video-react';
import {Row, Col} from 'react-materialize'
import VideoOne from '../movies/movie-1.mp4'
import VideoTwo from '../movies/movie-2.mp4'
import VideoThree from '../movies/movie-3.mp4'
import VideoFour from '../movies/movie-4.mp4'
import "./acting-out.css";

export default (props) => {
  return (
    <div>

      <Row>

        <Col s={6}>
        <h1>Willie B</h1>
          <Player>
            <source src={VideoOne} />
          </Player>
        </Col>

        <Col s={6}>
        <h1>Willie B</h1>
          <Player>
            <source src={VideoTwo} />
          </Player>
        </Col>

      </Row>

      <Row>

        <Col s={6}>
        <h1>Willie B</h1>
          <Player>
            <source src={VideoOne} />
          </Player>
        </Col>

        <Col s={6}>
        <h1>Willie B</h1>
          <Player>
            <source src={VideoThree} />
          </Player>
        </Col>

      </Row>


      <Row>

        <Col s={6}>
        <h1>Willie B</h1>
          <Player>
            <source src={VideoFour} />
          </Player>
        </Col>

      </Row>    

    </div>
  );
};