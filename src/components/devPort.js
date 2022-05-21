import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import tictactoe from "../images/tictactoe.png"

function DevPort() {
  return (
      <Container>
        {/* <Container >
        <Image rounded src={tictactoe} width={} alt=""></Image>
        </Container> */}
        <Container>
           <center> <iframe src='https://dashing-gecko-666ac6.netlify.app/' title='tictactoe' width="90%"></iframe></center>
        </Container>
        
         <center><iframe src="https://startling-sable-37c590.netlify.app" title="st" height="100%" width="100%"></iframe></center>
        
        
    </Container>
  )
}

export default DevPort