import gitHub from "../../assets/images/github.png"
import linkedIn from "../../assets/images/linkedin-logo.jpeg"
import "../../index.css"


const Footer = (props) => {

  return (
    <>
      <address className="footer" id="footer">
        <div className="contact">
          <a href="https://github.com/bortkyle18" target="_blank" rel="noreferrer" id="git" className="contactInfo">
            <img src={ gitHub } alt="github logo"/>
          </a>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/kyle-bort-909b6a230/" target="_blank" rel="noreferrer" id="linkedin" className="contactInfo">
            <img src={ linkedIn } alt="Linkedin Logo"/>
          </a>
        </div>
      </address>
    </>
  )
}

export default Footer