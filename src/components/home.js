import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarouselMain from './carousel'

function Home() {
  return (
    <Container>
        <Row>
            <Col>
            <h4>Web Developer, UX/UI Designer, Guy with Dog</h4>
            </Col>
        </Row>
     <center><CarouselMain /></center>
    </Container>
  )
}

export default Home