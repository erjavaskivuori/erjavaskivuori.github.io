import React from "react"
import DesignProject from "./DesignProject/index.jsx"
import Home from "./Home/index.jsx"

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "design-project",
    element: <DesignProject />,
    title: "design project"
  }
]

export default pagesData
