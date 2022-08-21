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
      <article className="welcomeInfo">
        <h2>Welcome to my portfolio page!</h2>
        <p>
          Please use the navigation bar at the top of the page to checkout different sections of my portfolio. 
          At the bottom of each page will be links to my GitHub page and LinkedIn page if you would like to see more.
          If you have any questions or would like to get in touch with me directly, please navigate to the contact section where my phone, email, and a contact form will be available for your use.
          Thank you for visiting and I hope to hear from you!
        </p>
      </article>
    </>
  )
}

export default Home