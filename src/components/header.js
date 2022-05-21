import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Image, Button, Modal} from 'react-bootstrap'
import logo from '../images/murrayhill.png'

function Header() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
      <>
 <Navbar  expand="lg" style={{backgroundColor:"#AA2AA5"}}>
  <Container >
      <Image fluid rounded src={logo} width={300} ></Image>
    {/* <Navbar.Brand href="#home">Murray Hill Design</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
        <Nav.Link href="#home"  style={{color:"#0C1829"}}>Home</Nav.Link>
        <Nav.Link href="#link"  style={{color:"#0C1829"}}>Dev Portfolio</Nav.Link>
        <Nav.Link href="#link"  style={{color:"#0C1829"}}>UX/UI Portfolio</Nav.Link>
        <Nav.Link href="#link"  style={{color:"#0C1829"}}>Resume</Nav.Link>
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