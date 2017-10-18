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
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      </Row>

      <Row>

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

      <Col s={3}>
        <img className="productionPic" alt="Curtis Glenn" src={require("../images/pictureOne.jpg")} />  
      </Col>    

    </Row>

  </div>;

export default Production;