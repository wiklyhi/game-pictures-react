import "./customnavbar.css";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import setOpasity from "../../utilits/setOpasity";
import renderImages from "../../utilits/renderImages";
import Modal from "../CustomModal/CustomModal";

let IMAGESARRAY = [];

///////////////////// CUSTOM NAVBAR //////////////////////

export default function CustomNavbar() {
  const [content, setContent] = useState(null);
  const [notImagesModal, setNotImagesModal] = useState(false);
  const [inOpasity, setInOpasyty] = useState(null);

  function handleOpasity() {
    const inOpasity = document.getElementsByTagName("img");
    !inOpasity.length == 0
      ? setInOpasyty(setOpasity(inOpasity))
      : setNotImagesModal(true);
  }

  function handleClick(number) {
    IMAGESARRAY = [];
    setContent(renderImages(IMAGESARRAY, number));
  }

  return (
    <>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">ЗАПОМНИ-КАРТИНКИ</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="ВЫБРАТЬ">
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => handleClick(12)}
                >
                  12 КАРТИНОК
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => handleClick(18)}
                >
                  18 КАРТИНОК
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => handleClick(24)}
                >
                  24 КАРТИНОК
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => handleClick(36)}
                >
                  36 КАРТИНОК
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="primary" onClick={handleOpasity}>
              СТАРТ
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {content ? <ImagesContainer contentImages={IMAGESARRAY} /> : null}

      <Modal open={notImagesModal}>
        <h5>
          Выберите количество картинок, запомните их и нажмите <br></br>"СТАРТ"
        </h5>
        <Button onClick={() => setNotImagesModal(false)}>CLOSE</Button>
      </Modal>
    </>
  );
}
