import React from 'react';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export function Navigation() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={ Link } to="/">Web3 Metatime</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={ Link } to="/blocks">Blocks</Nav.Link>
              <Nav.Link as={ Link } to="/transactions">Transactions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigation;
