import React from "react";
import {Row, Col} from 'react-materialize'
import "./about.css";

const About = () =>
  <div>

        {/* born in japan and intro to his family */}

        <Row>

        <h1>About Me</h1>

            <Col s={6} >
                <img className="pixabay" alt="Curtis Glenn" src={require("../images/home-japan-two.jpg")} />
            </Col>

            <Col s={6}>
                <p id="storyText">
                    Curtis Glenn was born in Tachikawa, Japan on October 11, 1971.  
                    His parents are Woodrow and Martha Glenn. When Woodrow completed his time in the military, he moved his family back to North Carolina.  
                    Woodrow was a college professor at Cleveland Community College and Martha was an administrator for Shelby Public Schools.
                </p>
            </Col>

        </Row>

        {/* growing up / karate life */}

        <Row>
            <Col s={6}>
                <img className="pixabay" alt="Curtis Glenn" src={require("../images/martial-arts.jpg")} />
            </Col>
            <Col s={6}>
                <p id="storyText">
                    Curtis grew up in Shelby, North Carolina. 
                    His family name became known for it’s Martial Arts background. The whole family (Woodrow, Martha, Jaron, and Curtis) 
                    were black belts and skilled in the Japanese form of Shi Toh Ryu and taught as a family.  
                    Curtis quickly gained fame as he began to sweep throughout Cleveland County winning numerous karate tournaments.  
                </p>
            </Col>
        </Row>

        {/* love life */}

        <Row>
            <Col s={6}>
                <img className="pixabay" alt="Curtis Glenn" src={require("../images/choreography.jpg")} />
            </Col>
            <Col s={6}>
                <p id="storyText">
                    In his teenage years, Curtis began using his skills for fight choreography for several events including the theatrical play THE WIZ.  
                    Those years became sweeter when he fell in love with a young lady name Demeca W. Brewer. Both were accepted at UNC Chapel Hill.  
                    Curtis and Demeca moved to Chapel Hill, NC.  Later, this couple became Curtis and Demeca Glenn.  
                    As the years past, they had two daughters (Kipany Glenn, Bahtia Glenn).  Not only did Curtis and Demeca teach karate, but also dance.  
                    As a couple (and family) the Glenn traditions were carried out as in the former time in Shelby.
                </p>
            </Col>
        </Row>


        {/* teaching at UNC campus and accomplishments */}
       
        <Row>
            <Col s={6}>
                <img className="pixabay" alt="Curtis Glenn" src={require("../images/karate-two.jpeg")} />
            </Col>
            <Col s={6}>
                <p id="storyText">
                Sensei Curtis Glenn is a 6th degree Black belt in the MAWJAC Budo Federation and a 3rd degree Black Belt in an old Japanese form called Shi Toh Ryu.  
                His journey began in 1975.  Curtis received his Black belt in 1980 and his 2nd degree in 1985.  
                Curtis has been teaching martial arts for over 25 years. In 1985 Curtis became the WMAF (World Martial Arts Federation) 
                champ in katas, also in 1987 he became the AAU regional champion in Kumite.  
                In 1992, Curtis explored the arena of Kickboxing and remained undefeated in the Amateur division.  
                After these accomplishments, Curtis focused on teaching karate and conducting Self Defense workshops on UNC campus.
                </p>
            </Col>
        </Row>

        {/* more theatrical roles */}

        <Row>
            <Col s={6}>
                <img className="picture" alt="Curtis Glenn" src={require("../images/pictureTwo.jpg")} />
            </Col>
            <Col s={6}>
                <p id="storyText">
                Aside from fight choreography, Curtis has performed in several theatrical plays.  Curtis appeared as a “Snake” in THE DIARY OF ADAM AND EVE.  
                Next, Curtis played a supporting role of “Greaser” in GREASE.  
                A year later, Curtis showed his versatility by playing several roles in A FUNNY THING HAPPENED ON THE WAY TO THE FORUM (Narrator, soldier, courtsman).  
                This was followed by a One-Act play called GROWING UP NAKED.  In that same year Curtis landed his second leading role. 
                </p>
            </Col>
        </Row>


        {/* serious theatrical roles */}

        <Row>
            <Col s={6}>
                <img className="picture" alt="Curtis Glenn" src={require("../images/pictureFive.jpg")} />
            </Col>
            <Col s={6}>
                <p id="storyText">
                He was showcased in THE WIZ where he played the role “Scarecrow.”  This success was followed by another lead role in another famous show.  
                This time the show was GODSPELL where Curtis played the role of “Lamar.”  
                Theater seems to fit Curtis as he landed a role in SECOND CHANCE followed by his notable role of “Uncle Willie” in TEACH THE YOUNG MAN.  
                This role spurred a following on the YouTube channel “The Versatility of CMG” where Uncle Willie’s life is chronicled by “The Adventures of Willie B”
                </p>
            </Col>
        </Row>


  </div>;

export default About;