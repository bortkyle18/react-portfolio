import "../../index.css"
import email from "../../assets/images/email.png"
import phone from "../../assets/images/phone.png"


const Contact = (props) => {

  return (
    <>
      <address className="contactMe">
        <div className="contact">
          <a href="tel:+15174883919" target="_blank" rel="noreferrer" id="phone" className="contactInfo">
            <img src={ phone } alt="phone"/>
            (517) 488-3919
          </a>
        </div>
        <div className="contact">
          <a href="mailto:bortkyle18@gmail.com" target="_blank" rel="noreferrer" id="email" className="contactInfo">
            <img src={ email } alt="email"/>
            bortkyle18@gmail.com
          </a>
        </div>
      </address>
    </>
  )
}

export default Contact