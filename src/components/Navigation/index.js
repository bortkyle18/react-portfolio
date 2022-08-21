import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../../index.css"


const Navigation = (props) => {
  const {
    homeSelected,
    setHomeSelected,
    aboutSelected,
    setAboutSelected,
    workSelected,
    setWorkSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  const setHomePage = () => {
    setHomeSelected(true);
    setAboutSelected(false);
    setWorkSelected(false);
    setContactSelected(false);
    setResumeSelected(false);
  }

  const setAboutPage = () => {
    setHomeSelected(false);
    setAboutSelected(true);
    setWorkSelected(false);
    setContactSelected(false);
    setResumeSelected(false);
  }

  const setWorkPage = () => {
    setHomeSelected(false);
    setAboutSelected(false);
    setWorkSelected(true);
    setContactSelected(false);
    setResumeSelected(false);
  }

  const setContactPage = () => {
    setHomeSelected(false);
    setAboutSelected(false);
    setWorkSelected(false);
    setContactSelected(true);
    setResumeSelected(false);
  }

  const setResumePage = () => {
    setHomeSelected(false);
    setAboutSelected(false);
    setWorkSelected(false);
    setContactSelected(false);
    setResumeSelected(true);
  }


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul>
                <li className={`home ${homeSelected && 'navActive'}`}>
                  <a href="#homePage" onClick={() => setHomePage()}>Kyle Bort</a>
                </li>
                <li className={`${aboutSelected && 'navActive'}`}>
                  <a href="#aboutPage" onClick={() => setAboutPage()}>About</a>
                </li>
                <li className={`${workSelected && 'navActive'}`}>
                  <a href="#workPage" onClick={() => setWorkPage()}>Work</a>
                </li>
                <li className={`${contactSelected && 'navActive'}`}>
                  <a href="#contactPage" onClick={() => setContactPage()}>Contact</a>
                </li>
                <li className={`${resumeSelected && 'navActive'}`}>
                  <a href="#contactPage" onClick={() => setResumePage()}>Resume</a>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation