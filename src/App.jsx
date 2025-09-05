import React from "react"
import { Routes, Route, HashRouter } from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import DesignProject from "./pages/DesignProject/index.jsx"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-project" element={<DesignProject />} />
      </Routes>
    </HashRouter>
  )
}

export default App
