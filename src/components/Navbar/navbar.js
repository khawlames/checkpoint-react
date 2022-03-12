import React from "react";
import { Nav,Navbar,Container } from 'react-bootstrap';



const navbar=()=>{
    return(
        <div>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Hydropro tunisie</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">ACCEUIL</Nav.Link>
      <Nav.Link href="#features">CONTACT</Nav.Link>
      <Nav.Link href="#pricing">PHOTOS</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</div>)
}

export default navbar 