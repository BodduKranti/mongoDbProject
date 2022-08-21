import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" className='shadow py-0 navbar-dark'>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className='px-3 py-2 bg-dark'><img src='../../../../images/logo.png' className='img-fluid' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <NavDropdown title="Blogs" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/blog">Blogs</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/bloglist">
                                    Blog List
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/blogCat">Blog Categories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                            <NavDropdown title="Product" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/product">Products</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/prodList">
                                    Product List
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/prodCat">Product Categories</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/productSrch">Product Serach</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/register" className='btn btn-dark px-3 rounded-pill'>Register</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" className='btn btn-danger px-3 rounded-pill'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header