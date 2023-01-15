import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  return (
    <Navbar variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='/'>Esfer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Link to='/login'>
            <Button variant='outline-info'>Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
