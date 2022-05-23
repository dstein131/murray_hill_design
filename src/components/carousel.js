import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import stevie1 from '../images/993FBFE1-B4AC-48BB-822E-C2B3A931D9D2_1_105_c.jpeg'


function CarouselMain() {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={stevie1}
      alt="First slide"
      style={{width:"100"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={stevie1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={stevie1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselMain