import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({token, setToken, setHeader, setUser}) => {
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        //setHeader(null);
        setUser(null);
    }

    return (
        <Navbar fixed="top" bg="light" expand="lg"  background-color="#fafcfc" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Strangers' Things</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Listings</Link></Nav.Link> 
              {!token ? (
                <>
                <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link ><Link to="/register">Register</Link></Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link ><Link to="/userObject">Dashboard</Link></Nav.Link>
                <Nav.Link onClick = {logout}>Logout</Nav.Link>
                </>
              )
              }
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
