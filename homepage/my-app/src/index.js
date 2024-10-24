import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import {Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter} from "react-bootstrap-icons";

const TopMenu = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Nav className="me-auto">
                <Nav.Link><Facebook/></Nav.Link>
                <Nav.Link><Twitter/></Nav.Link>
                <Nav.Link><Pinterest/></Nav.Link>
                <Nav.Link><Instagram/></Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link><HouseFill/> </Nav.Link>
                <Nav.Link><Search/> </Nav.Link>
                <Nav.Link><PersonFill/> </Nav.Link>
                <NavDropdown title={<Cart/>}>
                    <NavDropdown.Item></NavDropdown.Item>
                    <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
                </NavDropdown>
            </Nav>
        </Container>
    </Navbar>
);

const IslandSnowLogo = () => (
    <Container className="text-center">
        <img src={require("./logo.png")} alt="Logo" />;
    </Container>
);

//<Container className="text-center">

//</Container>

const MiddleMenu = () => {
    return (

        <Container fluid>

            <Row xs="auto">

                <Col sm={3}></Col>





                <Col xs={1}>

                    <Navbar variant="white" bg="white" expand="lg">
                        <Container fluid>

                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="MEN"
                                        menuVariant="white"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Col>
                <Col xs={1}>
                    <Navbar variant="white" bg="white" expand="lg">
                        <Container fluid>

                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="WOMEN"
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Col>
                <Col xs={1}>
                    <Navbar variant="white" bg="white" expand="lg">
                        <Container fluid>

                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="KIDS"
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Col>
                <Col xs={1}>
                    <Navbar variant="white" bg="white" expand="lg">
                        <Container fluid>

                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="BRANDS"
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Col>
                <Col xs={1}>
                    <Navbar variant="white" bg="white" expand="lg">
                        <Container fluid>

                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="SEARCH"
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Col>
            </Row>
        </Container>

    );
}

const FullWidthImage = () => (
    <Container className="text-center">
        <img src={require("./background.png")} alt="Logo" />;
    </Container>
);

const FooterMenu = () => (

    
    <Container>
        <Row>
            <Col>

                <Container className="text-left">
                    NAVIGATION
                </Container>
                <Container className="text-left">
                    About Us
                </Container>
                <Container className="text-left">
                    Employment
                </Container>

            </Col>
            <Col>
                <Container className="text-left">
                    MAIN MENU
                </Container>
                <Container className="text-left">
                    Men
                </Container>
                <Container className="text-left">
                    Women
                </Container>
            </Col>
            <Col>
                <Container className="text-left">
                    CONNECT
                </Container>
                <Container className="text-left">
                    Sign up for the latest updates
                </Container>
                <Container className="text-left">
                    MAIN MENU
                </Container>
            </Col>
        </Row>
    </Container>

);

const IslandSnow = () => (
    <Container>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);