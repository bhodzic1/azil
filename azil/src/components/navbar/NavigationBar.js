import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AzilContext } from '../../context/AzilContext';

const NavigationBar = () => {
  const { role, loggedIn } = useContext(AzilContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
        <Nav>
          <Nav.Link href="/adopts">My adopts</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>

          { !loggedIn && <Nav.Link href="/login">Login</Nav.Link> }
        </Nav>
      </Navbar.Collapse>
      </Container>
</Navbar>
  )
}

export default NavigationBar;