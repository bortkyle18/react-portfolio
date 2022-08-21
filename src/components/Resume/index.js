import "../../index.css"
import resume from "../../assets/images/resume.png"


const Resume = (props) => {

  return (
    <>
      <section id="resume" className="portfolio-section">
        <h2>Resume</h2>
        <address> 
          <a href="https://docs.google.com/document/d/1qbSrf113tiXe1m9VJ-qPEDcMp6B3BBT_gV5bAiUL8DI" className="sample" id="resumeInfo" target="blank" rel="noreferrer">
            <img src={ resume } alt="Kyle Bort's Resume"/>
          </a>
        </address>
      </section>
    </>
  )
}

export default Resume