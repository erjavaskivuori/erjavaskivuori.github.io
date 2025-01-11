import React from "react"
import Navbar from "../../components/Navbar.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "../../components/Contact.jsx"

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
