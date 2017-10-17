import React from 'react';
import { Player } from 'video-react';
import VideoOne from '../movies/movie-1.mp4'
import VideoTwo from '../movies/movie-2.mp4'
import VideoThree from '../movies/movie-3.mp4'
import VideoFour from '../movies/movie-4.mp4'
import "./acting-out.css";

export default (props) => {
  return (
    <div>

      <div className="row">

        <div className="col s6">
        <h1>Willie B</h1>
          <Player>
            <source src={VideoOne} />
          </Player>
        </div>

        <div className="col s6">
        <h1>Willie B</h1>
          <Player>
            <source src={VideoTwo} />
          </Player>
        </div>

      </div>

    <div className="row">

        <div className="col s6">
        <h1>Willie B</h1>
          <Player>
            <source src={VideoThree} />
          </Player>
        </div>
    

      <div className="col s6">
      <h1>Willie B</h1>
          <Player>
            <source src={VideoFour} />
          </Player>
        </div>

    </div>


    </div>
  );
};