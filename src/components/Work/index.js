import "../../index.css"


const Work = (props) => {

  return (
    <>
      <section id="work" className="portfolio-section">
        <h2>Work</h2>
        <article>
          <a href="https://travelot-app.herokuapp.com/" className="sample" id="travelot" target="blank" rel="noreferrer">
            <div className="sampleText">
              <h3>Travelot App</h3>
              <p>Express/MySQL/JavaScript</p>
            </div>
          </a>
          <a href="https://young-meadow-06036.herokuapp.com/" className="sample" id="note-taker" target="blank" rel="noreferrer">
            <div className="sampleText">
              <h3>Note Taker</h3>
              <p>Express</p>
            </div>
          </a>
          <a href="https://github.com/bortkyle18/social-network-api-nosql" className="sample" id="social-networking-nosql" target="blank" rel="noreferrer">
            <div className="sampleText">
              <h3>Social Network Database</h3>
              <p>Mongodb/Mongoose</p>
            </div>
          </a>
          <a href="https://github.com/bortkyle18/employee-tracker" className="sample" id="employee-tracker" target="blank" rel="noreferrer">
            <div className="sampleText">
              <h3>Employee Tracker</h3>
              <p>Node/SQL</p>
            </div>
          </a>
          <a href="https://bortkyle18.github.io/run-buddy/" className="sample" id="run-buddy" target="blank" rel="noreferrer">
            <div className="sampleText">
              <h3>Run Buddy</h3>
              <p>HTML/CSS</p>
            </div>
          </a>
        </article>
      </section>
    </>
  )
}

export default Work