import './index.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
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
  return (
    <div>
      <Navigation />
      <Container style={{ paddingTop: "20px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
