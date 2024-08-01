import React from 'react'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-nav py-4"> 
      <Container>
        <Navbar.Brand href="#home" className='text-color'>SCHOLAR ZONE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#featured">Featured</Nav.Link>
              <NavDropdown title="Section" id="basic-nav-dropdown">
                <NavDropdown.Item href="#categories">Categories</NavDropdown.Item>
                <NavDropdown.Item href="#resources">Resources</NavDropdown.Item>
              </NavDropdown> 
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent
