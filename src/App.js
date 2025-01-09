import React from "react"
import { BrowserRouter } from "react-router"
import Router from "./pages/router.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
