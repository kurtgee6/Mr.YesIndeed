import React from "react";
import {Row, Col} from 'react-materialize'
import "./production.css";

const Production = () =>
  <div>

    <Row>
     
      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureTwo.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureFour.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureThree.jpg")} />  
      </Col>    

      </Row>

      <Row>

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureFive.jpg")} />  
      </Col>    

    

    </Row>

  </div>;

export default Production;