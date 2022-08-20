import memoji from "../../assets/images/memoji-laptop.png"
import "../../index.css"


const Home = (props) => {

  return (
    <>
      <section className="hero-jumbotron">
        <div>
            <img id="memoji" src={ memoji } alt="Kyle Bort Memoji"/>
        </div>
        <div id="intro">
            <h1 id="hi">Hello, my name is</h1>
            <br />
            <h1 id="name">Kyle Bort</h1>
            <br />
            <p id="job">Full Stack Web Developer</p>
        </div>
      </section>
    </>
  )
}

export default Home