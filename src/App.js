import React from "react"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
