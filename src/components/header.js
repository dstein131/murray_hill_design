import React, { useState } from "react";
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
  Alert,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import logo from "../images/Untitled-1.svg";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Contact from "./contact";
import ConfirmEmail from "./confirmEmail";
import { render } from "@testing-library/react";

function Header() {
  const [sendEmail1, setSendEmail1] = useState(false);
  const [show, setShow] = React.useState(false);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowA(true);

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
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose2}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <LinkContainer to="/home">
            <Image fluid rounded src={logo} width={125}></Image>
          </LinkContainer>
          {/* <Navbar.Brand href="#home">Murray Hill Design</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <LinkContainer to="/home">
                <Nav.Link href="" style={{ color: "#0C1829" }}>   
                  home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/devport">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  front.end.dev
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/uxuiport">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  ux.ui
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link href="" style={{ color: "#0C1829" }}>
                  c.v
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
                <Button
                  size="sm"
                  variant="outline-warning"
                  onClick={handleShow}
                >
                  contact
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      send a message to murray.hill.web.dev
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form ref={form} onSubmit={sendEmail}>
                      <Form.Group>
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">
                            name
                          </span>
                          <input
                            class="form-control"
                            type="text"
                            name="user_name"
                          />
                        </div>
                      </Form.Group>
                      <Form.Group>
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">
                            e.mail
                          </span>
                          <input
                            class="form-control"
                            type="email"
                            name="user_email"
                            defaultValue={"required for response"}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group>
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">
                            message
                          </span>
                          <textarea class="form-control" name="message" />
                          {/* <input type="submit" value="Send" /> */}
                        </div>
                      </Form.Group>
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
      {/* <ToastContainer position="top-center">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">thanks</strong>
            <small>...just now</small>
          </Toast.Header>
          <Toast.Body variant="dark">message sent. will repond shortly</Toast.Body>
        </Toast>
      </ToastContainer> */}
    </>
  );
}

export default Header;
