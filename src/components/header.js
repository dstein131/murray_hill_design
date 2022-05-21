import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Image, Button, Modal, NavbarBrand} from 'react-bootstrap'
import logo from '../images/murrayhill.png'
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
      <>
 <Navbar  className='shadow-sm p-3 mb-5 bg-white' expand="lg" style={{backgroundColor:"transparent",
                                }}>
  <Container >
    <Image fluid rounded src={logo} width={260} ></Image>
    {/* <Navbar.Brand href="#home">Murray Hill Design</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
        <LinkContainer to="/home"><Nav.Link href=""  style={{color:"#0C1829"}}>Home</Nav.Link></LinkContainer>
        <LinkContainer to="/devport"><Nav.Link href=""  style={{color:"#0C1829"}}>Dev Portfolio</Nav.Link></LinkContainer>
        <LinkContainer to="/uxuiport"><Nav.Link href=""  style={{color:"#0C1829"}}>UX/UI Portfolio</Nav.Link></LinkContainer>
        <LinkContainer to="/resume"><Nav.Link href=""  style={{color:"#0C1829"}}>Resume</Nav.Link></LinkContainer>
        {/* <Nav.Link href="#link"  style={{color:"#0C1829"}}>Contact</Nav.Link> */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
         <>
      <Button variant="outline-warning" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  )
}

export default Header