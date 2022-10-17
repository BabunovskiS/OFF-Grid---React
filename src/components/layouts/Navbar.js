import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'
import {Container, Nav, NavbarBrand} from "react-bootstrap";
import {VscListSelection} from 'react-icons/vsc';


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav className="full-nav">
                <Container>
                    <Nav className="me-auto" id="nav-full">
                        <Nav.Link href="/" id="nav-left">
                            <NavbarBrand className="logo">
                                OFF GRID
                            </NavbarBrand>
                        </Nav.Link>

                        <Nav className="button-position" id="nav-right">
                            <Button class="btn btn-primary" onClick={handleShow}>
                                <span class="icon"> <VscListSelection/> </span>
                            </Button>
                        </Nav>
                    </Nav>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Container>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <Nav.Link href="/">
                                        <NavbarBrand className="logo">
                                            OFF GRID
                                        </NavbarBrand>
                                    </Nav.Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Container>
                                    <div className="menu-show">
                                        <div className="open-nav">
                                            <Nav.Link href="/">HOME</Nav.Link>
                                            <hr/>
                                            <Nav.Link href="/advanced">ADVANCED GROWTH SYSTEM</Nav.Link>
                                            <hr/>
                                            <Nav.Link href="/ebook">EBOOK</Nav.Link>
                                            <hr/>
                                            <Nav.Link href="/blog">BLOG</Nav.Link>
                                            <p className="hr-end">
                                                <hr/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="menu-show-end">
                                        <div className="col-lg-12" id="full-menu-end">
                                            <div className="col-lg-4" id="dm-end">
                                                <p>Digital Marketing</p>
                                            </div>
                                            <div className="col-lg-4" id="full-dm-end-social">
                                                <div className="col-lg-3" id="dm-end-social">
                                                    <p>Instagram</p>
                                                </div>
                                                <div className="col-lg-3" id="dm-end-social">
                                                    <p>Facebook</p>
                                                </div>
                                                <div className="col-lg-3" id="dm-end-social">
                                                    <p>LinkedIn</p>
                                                </div>
                                                <div className="col-lg-3" id="dm-end-social">
                                                    <p>Twitter</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4" id="dm-end-privacy">
                                                <p>Privacy policy</p>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Offcanvas.Body>
                        </Container>
                    </Offcanvas>
                </Container>
            </Nav>
        </>
    );
}


export default Example;