import React from "react";

const Voiceovers = () =>
  <div>
      <h1>This is the Voiceovers page</h1>

      <div class="row">
            <div class="col s6">
                <img className="pixabay" alt="Curtis Glenn" src={require("../images/home-japan-two.jpg")} />
            </div>
            <div class="col s6">
                <p id="storyText">
                    Curtis Glenn was born in Tachikawa, Japan on October 11, 1971.  
                    His parents are Woodrow and Martha Glenn. When Woodrow completed his time in the military, he moved his family back to North Carolina.  
                    Woodrow was a college professor at Cleveland Community College and Martha was an administrator for Shelby Public Schools.
                </p>
            </div>
        </div>


        <div class="row">
            <div class="col s6">
                <img className="pixabay" alt="Curtis Glenn" src={require("../images/martial-arts.jpg")} />
            </div>
            <div class="col s6">
                <p id="storyText">
                    Curtis grew up in Shelby, North Carolina. 
                    His family name became known for it’s Martial Arts background. The whole family (Woodrow, Martha, Jaron, and Curtis) 
                    were black belts and skilled in the Japanese form of Shi Toh Ryu and taught as a family.  
                    Curtis quickly gained fame as he began to sweep throughout Cleveland County winning numerous karate tournaments.  
                </p>
            </div>
        </div>

  </div>;

export default Voiceovers;