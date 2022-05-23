import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Image,
  Button,
  Modal,
  NavbarBrand,
  Form,
} from "react-bootstrap";
import logo from "../images/Untitled-1.svg";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Contact from "./contact";

function Header() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "murray_hill",
        "template_wkxau5d",
        form.current,
        "TmisvocKlvlRffcyP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleClose();
  };

  return (
    <>
      <Navbar
        className="shadow-sm p-3 mb-5 bg-white"
        expand="lg"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <Container>
          <Image fluid rounded src={logo} width={125}></Image>
          {/* <Navbar.Brand href="#home">Murray Hill Design</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <LinkContainer to="/home">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/devport">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  Front End
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/uxuiport">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  UX.UI
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  Resume
                </Nav.Link>
              </LinkContainer>

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
                    <Modal.Title>Message Murray Hill Design</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form ref={form} onSubmit={sendEmail}>
                      <Form.Label>Name</Form.Label>
                      <input class="form-control" type="text" name="user_name" />
                      <Form.Label>Email</Form.Label>
                      <input class="form-control" type="email" name="user_email" />
                      <Form.Label>Message</Form.Label>
                      <textarea class="form-control" name="message" />
                      {/* <input type="submit" value="Send" /> */}
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={sendEmail}>
                      Send Message
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
