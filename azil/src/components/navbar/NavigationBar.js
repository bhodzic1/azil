import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AzilContext } from '../../context/AzilContext';

const NavigationBar = () => {
  const { role, loggedIn, logOut, adoptionRequests } = useContext(AzilContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">AZIL</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
        <Nav>
          { loggedIn && role === 'User' && <Nav.Link href="/adopts">My adopts</Nav.Link> }
          { role === 'Admin' && <Nav.Link href="/requests">Adoption requests ({adoptionRequests.length})</Nav.Link> }
          { role === 'Admin' && <Nav.Link href="/register-animal">Animal registration</Nav.Link> }
          { !loggedIn && <Nav.Link href="/login">Login</Nav.Link> }
          { loggedIn && <Nav.Link href="/" onClick={logOut}>Log out</Nav.Link> }
        </Nav>
      </Navbar.Collapse>
      </Container>
</Navbar>
  )
}

export default NavigationBar;