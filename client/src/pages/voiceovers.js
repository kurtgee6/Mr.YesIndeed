import React, { Component } from 'react'
import MusicPlayer from 'react-responsive-music-player'
import "./voiceovers.css";

  export default class Voiceovers extends Component {
    
    render() {

        const playlist = [
            {
              url: 'http://res.cloudinary.com/dpeud2rab/video/upload/v1508510470/curtis-track1_u0eewh.mp3',
              cover: 'http://res.cloudinary.com/dpeud2rab/image/upload/v1508510918/pictureTwo_vuk6oh.jpg',
              title: 'Real Estate Commercial (Retirement Community)',
              artist: [
                'Curtis Glenn'
              ]
            },
            {
              url: 'http://res.cloudinary.com/dpeud2rab/video/upload/v1508510583/curtis-track2_nvoxdd.mp3',
              cover: 'http://res.cloudinary.com/dpeud2rab/image/upload/v1508510918/pictureTwo_vuk6oh.jpg',
              title: 'Travel Industry Commercial (Adventure Travel)',
              artist: [
                'Curtis Glenn'
              ]
            },
            {
              url: 'http://res.cloudinary.com/dpeud2rab/video/upload/v1508510625/curtis-track3_qx8tui.mp3',
              cover: 'http://res.cloudinary.com/dpeud2rab/image/upload/v1508510918/pictureTwo_vuk6oh.jpg',
              title: 'Technical Narration (Computer Terminology)',
              artist: [
                'Curtis Glenn'
              ]
            },
            {
              url: 'http://res.cloudinary.com/dpeud2rab/video/upload/v1508510652/curtis-track4_tl2uje.mp3',
              cover: 'http://res.cloudinary.com/dpeud2rab/image/upload/v1508510918/pictureTwo_vuk6oh.jpg',
              title: 'William Shakespeare Monologues (King Lear)',
              artist: [
                'Curtis Glenn'
              ]
            },
            {
              url: 'http://res.cloudinary.com/dpeud2rab/video/upload/v1508510680/curtis-track5_kyavgc.mp3',
              cover: 'http://res.cloudinary.com/dpeud2rab/image/upload/v1508510918/pictureTwo_vuk6oh.jpg',
              title: 'Public Service Announcement',
              artist: [
                'Curtis Glenn'
              ]
            },
            {
              url: 'http://res.cloudinary.com/dpeud2rab/video/upload/v1508510703/curtis-track6_fd0r4z.mp3',
              cover: 'http://res.cloudinary.com/dpeud2rab/image/upload/v1508510918/pictureTwo_vuk6oh.jpg',
              title: 'Television Documentary (Elephants of Kilimanjaro)',
              artist: [
                'Curtis Glenn'
              ]
            }
           
          ]

      return (
        
        <div>
            <center>
             <MusicPlayer playlist={playlist} />  
            </center>
        </div>
      )
    }
  }

