import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from '@material-ui/core'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: white;
    
  }
  .nav-item, navbar-brand {
    padding: 10px;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: red;
      text-decoration: none;
    }
  }
  .navbar-brand {
    font-size: 30px;
    font-weight: bold
  }
`;

const NavigationBar = () => {
    const history = useHistory();

    const handleLogOut = () => {
        /*logout();
        history.push('/');
        window.location.reload();*/
    }

    return (
        <Styles>
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand href="/">LIBRARY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Link to="/login">Login</Link>
                        </Nav.Item>
                    
                    
                        <Button onClick={() => handleLogOut()}>Log out</Button>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles >
    )
}

export default NavigationBar;