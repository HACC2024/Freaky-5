"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Row, Col, Form, Image } from "react-bootstrap";
/* Display the power usage bar */
const DisplayBar = () => (
  <Container>
    <h1 className="text-center pt-4">Power Usage</h1>


  <div class="buttons-container">
    <button onclick="increaseSize()">Increase Size</button>
    <button onclick="decreaseSize()">Decrease Size</button>
    <button onclick="resetSize()">Reset Size</button>
  </div>

<div class="navbar">
  <div class="bar-container">
    <div id="resizable-bar" class="bar"></div>
  </div>
</div>

<script src="bar.js"></script>
</Container>
)


/* Display the electric objects and item switches */
const ItemSwitches = () => (
  <Container>
    <Row className="">
      <Col className="col-sm my-3 mx-2">
        <Image src="" alt="insert image" className="fluid"></Image>
          <Form className="form-check form-switch align-items-center">
            <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item name</label>
          </Form>
        </Col>
        <Col className="col-sm my-3 mx-2">
          <Image src="" alt="insert image"></Image>
          <Form className="form-check form-switch">
            <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
          </Form>
        </Col>
        <Col className="col-sm my-3 mx-2">
          <Image src="" alt="insert image"></Image>
          <Form className="form-check form-switch">
            <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
          </Form>
        </Col>
        <Col className="col-sm my-3 mx-2">
          <Image src="" alt="insert image"></Image>
          <Form className="form-check form-switch">
            <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
          </Form>
        </Col>
        <Col className="col-sm my-3 mx-2">
          <Image src="" alt="insert image"></Image>
          <Form className="form-check form-switch">
            <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
          </Form>
        </Col>
        <Col className="col-sm my-3 mx-2">
          <Image src="" alt="insert image"></Image>
          <Form className="form-check form-switch">
            <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
          </Form>
        </Col>
      </Row>
  </Container>
);

/* Home page */
export default function Home() {
  return (
    <main>
      <DisplayBar/>
      <ItemSwitches/>
    </main>
  );
}