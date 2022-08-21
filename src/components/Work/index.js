import "../../index.css"
import gitHub from "../../assets/images/github.png"


const Work = (props) => {

  return (
    <>
      <section id="work" className="portfolio-section">
        <h2>Work</h2>
        <article>
          <div className="sampleText" id="travelot">
            <div>
              <a href="https://travelot-app.herokuapp.com/" target="_blank" rel="noreferrer">
                Travelot App
              </a>
              <a href="https://github.com/angelagola-ko/Travelot-Destination-Planner" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Express/MySQL/JavaScript</p>
          </div>
          <div className="sampleText" id="note-taker">
            <div>
              <a href="https://young-meadow-06036.herokuapp.com/" target="_blank" rel="noreferrer">
                Note Taker
              </a>
              <a href="https://github.com/bortkyle18/note-taker" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Express</p>
          </div>
          <div className="sampleText" id="social-networking-nosql">
            <div>
              <a href="https://github.com/bortkyle18/social-network-api-nosql" target="blank" rel="noreferrer">
                Social Network Database
              </a>
              <a href="https://github.com/bortkyle18/social-network-api-nosql" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Mongodb/Mongoose</p>
          </div>
          <div className="sampleText" id="employee-tracker">
            <div>
              <a href="https://github.com/bortkyle18/employee-tracker" target="blank" rel="noreferrer">
                Employee Tracker
              </a>
              <a href="https://github.com/bortkyle18/employee-tracker" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Node/SQL</p>
          </div>
          <div className="sampleText" id="run-buddy">
            <div>
              <a href="https://bortkyle18.github.io/run-buddy/" target="blank" rel="noreferrer">
                Run Buddy
              </a>
              <a href="https://github.com/bortkyle18/run-buddy" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>HTML/CSS</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Work