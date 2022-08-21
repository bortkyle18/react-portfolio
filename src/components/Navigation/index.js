import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../../index.css"


const Navigation = (props) => {

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/react-portfolio/">Kyle Bort</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/react-portfolio/About">About</Nav.Link>
              <Nav.Link href="/react-portfolio/Work">Work</Nav.Link>
              <Nav.Link href="/react-portfolio/Contact">Contact</Nav.Link>
              <Nav.Link href="/react-portfolio/Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation