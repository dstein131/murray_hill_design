import React from "react";
import { Col, Container, Card, Row, Image } from "react-bootstrap";
import CarouselMain from "./carousel";
import bannerImage from "../images/darktheater.png";
import webdev from "../images/dev.png";
import ux from "../images/ux.png";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function Home() {
  return (
    <>
    <Container>
    {/* <center><div style={{width: "90vw"}}> */}
      <Row>
        <Col>
        <LinkContainer to="/home">
        <Card className="text-white shadow-md">
          <Card.Img src={bannerImage} alt="Card image" />
          <Card.ImgOverlay>
            {/* <Card.Title>clean</Card.Title> */}
            <Card.Subtitle className="mb-1" style={{ fontSize: "14px" }}>minimal</Card.Subtitle>
            <Card.Subtitle className="mb-1" style={{ fontSize: "14px" }}>responsive</Card.Subtitle>
            <Card.Subtitle style={{ fontSize: "14px" }}>user.focused</Card.Subtitle>
            <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end">
              <Card.Subtitle style={{ fontSize: "14px" }}>front.end web.dev | ux.ui design</Card.Subtitle>
            </div>
            {/* <Card.Footer variant="bottom">
    Last updated 3 mins ago
    </Card.Footer> */}
          </Card.ImgOverlay>
        </Card>
        </LinkContainer>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
        <LinkContainer to="/devport">
          <Card className="text-white shadow-md">
            <Card.Img src={webdev} alt="Card image" />
            <Card.ImgOverlay>
              {/* <Card.Title>clean</Card.Title> */}
              <Card.Subtitle style={{ fontSize: "14px" }}>web.development</Card.Subtitle>
              <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end">
                <Card.Subtitle style={{ fontSize: "14px" }}>htlml.css | javascript.react</Card.Subtitle>
              </div>
              {/* <Card.Footer variant="bottom">
            Last updated 3 mins ago
            </Card.Footer> */}
            </Card.ImgOverlay>
          </Card>
          </LinkContainer>
        </Col>
        <Col >
        <LinkContainer to="/uxuiport">
          <Card className="text-white shadow-md">
            <Card.Img src={ux} alt="Card image" />
            <Card.ImgOverlay>
              {/* <Card.Title>clean</Card.Title> */}
              <Card.Subtitle style={{ fontSize: "14px" }}>ux.ui design</Card.Subtitle>
              <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end">
                <Card.Subtitle style={{ fontSize: "14px" }}>user.research | prototyping</Card.Subtitle>
              </div>
              {/* <Card.Footer variant="bottom">
            Last updated 3 mins ago
            </Card.Footer> */}
            </Card.ImgOverlay>
          </Card>
        </LinkContainer>
        </Col>
        {/* <Col>3</Col> */}
      </Row>
      {/* </div> */}
      {/* </center> */}
      </Container>
     </>
  );
}

export default Home;
