"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { ProgressBar, Container, Row, Col, Form, Image } from "react-bootstrap";
import { LightningChargeFill } from "react-bootstrap-icons";

/* Calculate the power usage percentage based off switches */
function CalculatePowerUsage() {
  return 60;
}

/* Display the power usage bar */
const DisplayBar = () => (
  <Container>
    <h1 className="text-center pt-4">Power Usage</h1>
    <LightningChargeFill size={30} color={"black"}/>
    <ProgressBar animated now={CalculatePowerUsage()} label={`${CalculatePowerUsage()}%`} />
  </Container>
);

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