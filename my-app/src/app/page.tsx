"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-center">Power Usage</h1>
        <ProgressBar now={60} label={`${60}%`} />
      </Container>
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Item Name</label>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </main>
  );
}