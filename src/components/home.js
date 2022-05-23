import React from 'react'
import { Col, Container, Card, Row, Image } from 'react-bootstrap'
import CarouselMain from './carousel'
import bannerImage from '../images/darktheater.png'

function Home() {
  return (
    <Container>
       <Card className="text-white">
  <Card.Img src={bannerImage} alt="Card image" />
  <Card.ImgOverlay>
    {/* <Card.Title>clean</Card.Title> */}
    <Card.Title>minimalist</Card.Title>
    <Card.Title>responsive</Card.Title>
    <Card.Title>user.focused</Card.Title>
    <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end">
    <Card.Subtitle>
      front.end web.dev | ux.ui design
    </Card.Subtitle>
    </div>
    {/* <Card.Footer variant="bottom">
    Last updated 3 mins ago
    </Card.Footer> */}
  </Card.ImgOverlay>
</Card>
        
   
    </Container>
  )
}

export default Home