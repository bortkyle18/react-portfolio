import './index.css';
import React, { useState } from 'react';
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>
      <Navigation 
      homeSelected={homeSelected}
      setHomeSelected={setHomeSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      workSelected={workSelected}
      setWorkSelected={setWorkSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      />
      <Container style={{ paddingTop: "20px" }}>
        {homeSelected ? (
          <>
            <Home id="homePage" />
          </>
        ) : (aboutSelected ? (
          <>
            <About id="aboutPage"/>
          </>
        ) : (workSelected ? (
          <>
            <Work id="workPage"/>
          </>
        ) : (contactSelected ? (
          <>
            <Contact id="contactPage"/>
          </>
        ) : (resumeSelected ? (
          <>
            <Resume id="resumePage"/>
          </>
        ) : (
          <Home id="homePage"/>
        )))))
        }
      </Container>
      <Footer />
    </div>
  );
}

export default App;
